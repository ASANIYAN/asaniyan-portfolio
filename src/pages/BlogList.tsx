import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Navbar from "@/modules/landing/Navbar";
import Footer from "@/modules/landing/Footer";
import { postsQuery, sanityClient, urlFor, type PostSummary } from "@/lib/sanity";

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();
}

const BlogList = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => sanityClient.fetch<PostSummary[]>(postsQuery),
  });

  return (
    <section>
      <Navbar />

      <section className="w-full max-w-[1400px] mx-auto mt-16 md:mt-[88px] px-5 text-text">
        <h1 className="font-display text-6xl md:text-8xl font-light mb-10">
          Musings
        </h1>

        {isLoading && (
          <p className="label-mono text-sm text-muted-text">Loading...</p>
        )}

        {!isLoading && posts?.length === 0 && (
          <p className="font-light text-muted-text">
            Nothing published yet — check back soon.
          </p>
        )}

        <div className="border-t border-t-black">
          {posts?.map((post, index) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="press border-b border-b-black py-6 md:py-8 grid grid-cols-1 md:grid-cols-[64px_1fr_auto] gap-x-6 gap-y-2 group"
            >
              <span className="label-mono text-sm text-muted-text">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex items-start gap-4">
                {post.coverImage && (
                  <img
                    src={urlFor(post.coverImage).width(96).height(96).url()}
                    alt=""
                    className="w-16 h-16 object-cover shrink-0"
                  />
                )}
                <div>
                  <p className="font-display text-2xl md:text-3xl font-light group-hover:text-ink transition-colors">
                    {post.title}
                  </p>
                  {post.excerpt && (
                    <p className="font-light text-sm text-muted-text mt-1 max-w-[560px]">
                      {post.excerpt}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-2 label-mono text-xs uppercase text-muted-text mt-2">
                      {post.tags.map((tag) => (
                        <li key={tag} className="bracket-label">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <span className="label-mono bracket-label text-sm text-muted-text md:text-right">
                {formatDate(post.publishedAt)}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default BlogList;

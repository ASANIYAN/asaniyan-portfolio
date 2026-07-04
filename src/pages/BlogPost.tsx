import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Navbar from "@/modules/landing/Navbar";
import Footer from "@/modules/landing/Footer";
import {
  postBySlugQuery,
  sanityClient,
  urlFor,
  type CodeBlock,
  type PostDetail,
} from "@/lib/sanity";

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toUpperCase();
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(1200).url()}
        alt={value.alt ?? ""}
        className="w-full my-6"
      />
    ),
    code: ({ value }: { value: CodeBlock }) => (
      <pre className="label-mono text-sm bg-surface border border-black p-4 my-6 overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-2xl md:text-3xl font-medium mt-10 mb-4">
        {children}
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-black pl-5 my-6 text-muted-text italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink underline underline-offset-2 hover-ink"
      >
        {children}
      </a>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () =>
      sanityClient.fetch<PostDetail | null>(postBySlugQuery, { slug }),
    enabled: Boolean(slug),
  });

  return (
    <section>
      <Navbar />

      <section className="w-full max-w-[768px] mx-auto mt-16 md:mt-[88px] px-5 text-text">
        <Link
          to="/blog"
          className="label-mono bracket-label press hover-ink text-sm text-muted-text"
        >
          Back to musings
        </Link>

        {isLoading && (
          <p className="label-mono text-sm text-muted-text mt-8">Loading...</p>
        )}

        {!isLoading && !post && (
          <p className="font-light text-muted-text mt-8">
            This post doesn't exist or hasn't been published yet.
          </p>
        )}

        {post && (
          <article className="mt-6">
            <p className="label-mono bracket-label text-sm text-muted-text">
              {formatDate(post.publishedAt)}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-light mt-2 mb-6">
              {post.title}
            </h1>

            {post.coverImage && (
              <img
                src={urlFor(post.coverImage).width(1200).url()}
                alt=""
                className="w-full mb-8"
              />
            )}

            <div className="font-light leading-relaxed">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>

            {post.tags && post.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2 label-mono text-xs uppercase text-muted-text mt-10 pt-6 border-t border-t-black">
                {post.tags.map((tag) => (
                  <li key={tag} className="bracket-label">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
        )}
      </section>

      <Footer />
    </section>
  );
};

export default BlogPost;

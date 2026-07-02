import { Link } from "react-router-dom";

const BlogComingSoon = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-5 text-center text-text">
      <p className="label-mono bracket-label text-sm text-muted-text uppercase">
        Blog
      </p>
      <h1 className="font-display text-5xl md:text-7xl font-light">
        Writing soon.
      </h1>
      <p className="max-w-md font-light text-muted-text">
        Notes on what I'm building and learning are coming to this space.
      </p>
      <Link
        to="/"
        className="label-mono bracket-label press hover-ink text-sm"
      >
        Back home
      </Link>
    </section>
  );
};

export default BlogComingSoon;

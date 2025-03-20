import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export async function Posts() {
  const posts = await getAllPosts();

  return (
    <>
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <>
          {posts.map((post) => {
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="py-4 w-full hover:bg-[var(--bg)]"
                style={{ borderBottom: "1px solid var(--bg)" }}
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-medium">
                    {post.frontmatter.title}
                  </h2>
                  <p>{post.frontmatter.date}</p>
                </div>
                <p className="font-medium line-clamp-2">
                  {post.frontmatter.description}
                </p>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
}

export async function PostLength() {
  const posts = await getAllPosts();

  return (
    <div
      className="py-2"
      style={{
        borderBottom: "1px solid var(--bg)",
        borderTop: "1px solid var(--bg)",
      }}
    >
      <p className="text-lg">{posts.length} post in total</p>
    </div>
  );
}

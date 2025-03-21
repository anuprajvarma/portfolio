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
                className="py-4 flex hover:bg-[var(--bg)]"
                style={{ borderBottom: "1px solid var(--bg)" }}
              >
                <div className="flex flex-col gap-2 justify-between">
                  <div className="">
                    <h2 className="text-xl font-medium">
                      {post.frontmatter.title}
                    </h2>
                    <div className="font-medium flex sm:hidden text-sm sm:w-[6rem]">
                      {post.frontmatter.date}
                    </div>
                  </div>
                  <p className="line-clamp-1">{post.frontmatter.description}</p>
                </div>
                <div className="font-medium sm:flex hidden justify-end text-sm sm:w-[6rem]">
                  {post.frontmatter.date}
                </div>
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

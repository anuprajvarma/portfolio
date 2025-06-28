// import { getAllPosts } from "@/lib/mdx";
import { Blogs } from "@/customData/blogs";
import Link from "next/link";

export async function Posts() {
  // const posts = await getAllPosts();

  return (
    <>
      {Blogs.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div className="sm:px-2 rounded-sm">
          {Blogs.map((post, index) => {
            return (
              <Link
                key={index}
                href={`/blog/${post.title}`}
                className="py-4 flex hover:bg-[var(--bg)]/70 sm:px-4 my-2 rounded-md"
                style={{ borderBottom: "1px solid var(--bg)" }}
              >
                <div className="flex w-full flex-col gap-2 justify-between">
                  <div className="w-full flex justify-between">
                    <h2 className="text-xl font-medium">{post.title}</h2>
                    {/* <div className="font-medium flex sm:hidden text-sm sm:w-[6rem]">
                      {post.date}
                    </div> */}
                  </div>
                  <p className="line-clamp-1">{post.description}</p>
                </div>
                <div className="font-medium sm:flex hidden justify-end text-sm sm:w-[6rem]">
                  {post.date}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export async function PostLength() {
  // const posts = await getAllPosts();

  return (
    <div
      className="py-2"
      style={{
        borderBottom: "1px solid var(--bg)",
        borderTop: "1px solid var(--bg)",
      }}
    >
      <p className="text-md font-medium text-end">
        {Blogs.length} post in total
      </p>
    </div>
  );
}

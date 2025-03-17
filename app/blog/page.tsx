import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function BlogPosts() {
  const blogDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent); // Extract Front Matter
    return {
      slug: file.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });

  return (
    <div className="w-full">
      <div className="w-[40rem] m-auto flex flex-col gap-4 p-4 py-6">
        <div className="border-y border-grey-light py-2">
          <p className="text-lg">{files.length} post in total</p>
        </div>
        <div className="flex flex-col w-full cursor-pointer">
          {files.length === 0 ? (
            <p>No blog posts found.</p>
          ) : (
            <>
              {posts.map(({ slug, title, description, date }) => {
                return (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="py-4 border-b border-grey-light w-full hover:bg-grey"
                  >
                    <div className="flex justify-between">
                      <h2 className="text-xl font-medium">{title}</h2>
                      <p>{date}</p>
                    </div>
                    <p className="font-medium line-clamp-2">{description}</p>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define where your MDX files are stored
const BLOG_DIR = path.join(process.cwd(), "content");

export async function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log("No 'posts' directory found.");
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) {
    console.log("Params are undefined:", params);
    return notFound();
  }

  const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); // Extract metadata & content

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <p className="text-gray-700 italic">{data.description}</p>
      <article className="prose mt-4">{content}</article>
    </div>
  );
}

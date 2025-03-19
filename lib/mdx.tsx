import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content");

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const fileContent = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(fileContent);
    return { slug, frontmatter: data };
  });
}
export async function getPostBySlug(slug: string) {
  const fileContent = fs.readFileSync(
    path.join(postsDir, `${slug}.mdx`),
    "utf-8"
  );
  const { content, data } = matter(fileContent);
  return { content, frontmatter: data };
}

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const postsDir = path.join(process.cwd(), "content");

// export async function getAllPosts() {
//   const files = await fs.promises.readdir(postsDir);
//   return Promise.all(
//     files.map(async (file) => {
//       const slug = file.replace(".mdx", "");
//       const fileContent = await fs.promises.readFile(
//         path.join(postsDir, file),
//         "utf-8"
//       );
//       const { data } = matter(fileContent);
//       return { slug, frontmatter: data };
//     })
//   );
// }

// export async function getPostBySlug(slug: string) {
//   const fileContent = await fs.promises.readFile(
//     path.join(postsDir, `${slug}.mdx`),
//     "utf-8"
//   );
//   const { content, data } = matter(fileContent);
//   return { content, frontmatter: data };
// }

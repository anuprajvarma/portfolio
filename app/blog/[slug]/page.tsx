import { getPostBySlug } from "@/lib/mdx";

export default async function Post({ params }: { params: { slug: string } }) {
  const { content, frontmatter } = await getPostBySlug(params.slug);

  return (
    <div className="w-full">
      <div className="w-[40rem] m-auto p-4">
        <h1 className="text-xl font-medium">{frontmatter.title}</h1>
        <p className="text-gray-500">{frontmatter.date}</p>
        <p className="text-gray-500 font-medium">{frontmatter.description}</p>
        <article className="prose mt-4">{content}</article>
      </div>
    </div>
  );
}

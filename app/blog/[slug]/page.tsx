import { getPostBySlug } from "@/lib/mdx";
import { MyImage } from "@/components/MyImage";
import Link from "next/link";

export default async function Blog({ params }: { params: { slug: string } }) {
  const { content, frontmatter } = await getPostBySlug(await params.slug);

  return (
    <div className="w-full">
      <div className="sm:w-[40rem] w-full m-auto p-4 flex flex-col gap-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium">{frontmatter.title}</h1>
          <div className="flex gap-1 items-center text-xs">
            <div className="flex gap-2 items-center">
              <MyImage picHeight={30} picWeight={30} />
              <Link
                href="https://x.com/Anupraj_varma"
                target="_blank"
                className="cursor-pointer"
              >
                @Anupraj
              </Link>
            </div>
            <p>| {frontmatter.date}</p>
          </div>
        </div>
        <p className="font-medium">{frontmatter.description}</p>
        <article className="prose mt-4">{content}</article>
      </div>
    </div>
  );
}

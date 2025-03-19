import { Posts } from "@/components/posts";
import { PostLength } from "@/components/posts";

export default async function Blogs() {
  return (
    <div className="w-full">
      <div className="w-[40rem] m-auto flex flex-col gap-4 p-4 py-6">
        <PostLength />
        <div className="flex flex-col w-full cursor-pointer">
          <Posts />
        </div>
      </div>
    </div>
  );
}

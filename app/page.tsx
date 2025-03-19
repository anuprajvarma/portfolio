import MyImage from "@/components/MyImage";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube } from "@/components/socialLinks";
import { Posts } from "@/components/posts";

export default async function Page() {
  return (
    <div className="w-[40rem] m-auto">
      <div className="p-4 py-6 w-full flex flex-col gap-8">
        <div className="flex justify-between w-full">
          <div className="w-9/12 flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Anupraj Varma</h1>
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                I’m a software engineer and CEO of Vercel. I’m originally from
                Lanús, Buenos Aires, Argentina. I owe much of my career to the
                Web and open source.
              </p>
              <div className="flex gap-6 cursor-pointer">
                <Linkedin />
                <Github />
                <Twitter />
                <Youtube />
              </div>
            </div>
          </div>
          <div className="h-[7rem] w-[7rem]">
            <MyImage />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Featured Projects</h1>
          <div className="flex flex-col w-full cursor-pointer">
            <Posts />
          </div>
          <div className="flex flex-col cursor-pointer">
            <div className="relative w-full flex justify-center">
              <div className="fixed bottom-0 cursor-pointer w-6/12 flex items-center flex-col">
                <Link
                  href="/blog"
                  className="w-4/12 flex flex-col justify-center items-center text-center"
                >
                  <MdKeyboardDoubleArrowDown
                    size={60}
                    className="my-6 cursor-pointer animate-bounce"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

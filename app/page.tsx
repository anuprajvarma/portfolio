import { MyImage } from "@/components/MyImage";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube } from "@/components/socialLinks";
import { Posts } from "@/components/posts";
// import Header from "@/components/Header";

export default async function Page() {
  return (
    <div className="w-full mt-20">
      <div className="sm:w-[55rem] w-full m-auto border border-[var(--bg)] rounded-sm">
        <div className="p-4 py-6 w-full flex flex-col gap-8">
          <div className="flex sm:flex-row flex-col-reverse  gap-1 sm:justify-between justify-center items-center w-full">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold flex justify-center sm:justify-start">
                Anupraj Varma
              </h1>
              <div className="flex flex-col sm:text-start text-center gap-4">
                <p className="text-sm">
                  A sociopathic software developer who debugs code like
                  Rick&apos;s experiments—chaotic, unpredictable, yet always
                  groundbreaking.
                </p>
                <div className="flex gap-6 cursor-pointer justify-center sm:justify-start">
                  <Linkedin link="https://www.linkedin.com/in/anuprajvarma/" />
                  <Github link="https://github.com/anuprajvarma" />
                  <Twitter link="https://x.com/Anupraj_varma" />
                  <Youtube link="https://www.youtube.com/@MarkVerma" />
                </div>
              </div>
            </div>
            <div className="h-[8rem] w-[10rem] flex justify-center sm:justify-start">
              <MyImage picHeight={100} picWeight={100} />
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
    </div>
  );
}

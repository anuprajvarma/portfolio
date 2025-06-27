import { MyImage } from "@/components/MyImage";
import ProjectCard from "@/components/ProjectCard";

export default function About() {
  return (
    <div className="w-full">
      <div className="sm:w-[55rem] w-full m-auto border border-[var(--bg)] rounded-sm">
        <div className="m-auto p-4 py-6 flex flex-col text-md gap-4 sm:text-start text-center">
          <p className="text-4xl font-medium text-start">About</p>
          <div className="flex sm:flex-row flex-col-reverse justify-between gap-2 w-full">
            <div className="sm:w-10/12 gap-4 flex flex-col">
              <p>
                I’m Anupraj Varma, a software developer at Kroto, based in the
                dynamic tech hub of Bengaluru, India. Who transform ideas into
                interactive and scalable web experiences.
              </p>{" "}
              <p>
                Passionate about open-source contributions, traveling, and
                constantly seeking the next big innovation. Let’s connect and
                create something extraordinary!
              </p>{" "}
            </div>
            <div className="h-[7rem] w-[7rem] flex m-auto">
              <MyImage picHeight={100} picWeight={100} />
            </div>
          </div>
          <p>
            When I’m not debugging, you’ll find me exploring emerging
            technologies, contributing to open source, or strategizing my next
            ambitious project.
          </p>{" "}
        </div>
        <div className="p-4 py-6 flex flex-col gap-8">
          <p className="text-4xl font-medium">Experience</p>
          <div className="flex gap-2 w-full">
            <div className="w-4/12 h-[400px] sm:flex sm:flex-col hidden">
              <div className="h-[200px]">
                <div>
                  <p className="text-3xl font-medium">Kroto</p>
                  <p className="text-sm">October 2024 - Current</p>
                </div>
              </div>
              <div className="h-[200px]">
                <div>
                  <p className="text-3xl font-medium">Material Depo</p>
                  <p className="text-sm">May 2024 - July 2024</p>
                </div>
              </div>
            </div>
            <div className="h-[400px] relative sm:flex hidden">
              <div className="flex flex-col h-[220] items-center pt-3">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                <div className="w-[2px] h-full bg-white"></div>
              </div>
              <div className="h-[180] absolute bottom-0">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
              </div>
            </div>
            <div className="sm:w-8/12 w-full sm:h-[400px] flex flex-col gap-4 sm:pl-8">
              <div className="sm:h-[200px] flex flex-col gap-2">
                <div>
                  <p className="text-3xl font-medium">Software Developer</p>
                  <div className="sm:hidden flex flex-col">
                    <p className="text-md font-medium">Kroto</p>
                    <p className="text-sm">October 2024 - Current</p>
                  </div>
                </div>
                <p className="text-sm">
                  I collaborated on Next.js & TailwindCSS codebase to add
                  features, enhance UI and redesign multiple pages.
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex">
                    <li />
                    <p className="">
                      Added ask-query feature on landing page, improving team
                      communication for 300+ users.
                    </p>
                  </div>
                  <div className="flex">
                    <li />
                    <p className="">
                      Constructed reusable components, pages, and forms with
                      streamlined Zod validation integration{" "}
                    </p>
                  </div>
                  <div className="flex">
                    <li />
                    <p className="">
                      Tech Stack- NextJS, Typescript, TailwindCSS, tRPC, Prisma{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:h-[200px] flex flex-col gap-2">
                <div>
                  <p className="text-3xl font-medium">Frontend Developer</p>
                  <div className="sm:hidden flex flex-col">
                    <p className="text-md font-medium">Material Depo</p>
                    <p className="text-sm">May 2024 - July 2024</p>
                  </div>
                </div>
                <p className="text-sm">
                  Working at Material Depo, I was responsible for developing and
                  maintaining the frontend of the website.
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex">
                    <li />
                    <p>
                      Integrated Mix Panel Analytics tool for various functions,
                      which highly impacted the product launch analysis
                    </p>
                  </div>
                  <div className="flex">
                    <li />
                    <p>
                      Worked on two project on ReactJS and delivered their MVP
                    </p>
                  </div>
                  <div className="flex">
                    <li />
                    <p>Tech Stack- ReactJS, Typescript, TailwindCSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full py-8 flex flex-col gap-4">
          <p className="text-3xl font-medium">Projects</p>
          <div className="flex justify-between gap-4 w-full">
            <ProjectCard
              title="Cape"
              description="Cape makes learning from YouTube effortless and distraction-free. Track your progress with daily streaks, take notes using the integrated Notion editor, and get playlist-specific help with a built-in AI chatbot."
              githubLink="https://github.com/anuprajvarma/cape"
              liveLink="https://cape-lyart.vercel.app/"
              imageLink="/course-page.png"
            />
            <ProjectCard
              title="Stich"
              description="Stich is a chrome extension, with stich you don't need to switch tabs for using AI you can use this on any site instantly."
              githubLink="https://github.com/anuprajvarma/stich-chrome-extension"
              liveLink="https://moviehub1.vercel.app/"
              imageLink="/image3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { MyImage } from "@/components/MyImage";
import ProjectCard from "@/components/ProjectCard";

export default function About() {
  return (
    <div className="w-full">
      <div className="sm:w-[55rem] w-full m-auto">
        <div className="m-auto p-4 py-6 flex flex-col text-sm gap-2 sm:text-start text-center">
          <p className="text-3xl font-medium text-start">About</p>
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
        <div className="p-4 py-6 flex flex-col gap-4">
          <p className="text-3xl font-medium">Experience</p>
          <div className="flex gap-2 w-full">
            <div className="w-4/12 h-[400px] sm:flex sm:flex-col hidden">
              <div className="h-[200px]">
                <div>
                  <p className="text-2xl font-medium">Kroto</p>
                  <p className="text-xs">October 2024 - Current</p>
                </div>
              </div>
              <div className="h-[200px]">
                <div>
                  <p className="text-2xl font-medium">Material Depo</p>
                  <p className="text-xs">May 2024 - July 2024</p>
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
                  <p className="text-2xl font-medium">Software Developer</p>
                  <div className="sm:hidden flex flex-col">
                    <p className="text-md font-medium">Kroto</p>
                    <p className="text-xs">October 2024 - Current</p>
                  </div>
                </div>
                <p className="text-xs">
                  I collaborated on Next.js & TailwindCSS codebase to add
                  features, enhance UI and redesign multiple pages.
                </p>
                <div className="flex flex-col gap-2 text-xs">
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
                  <p className="text-2xl font-medium">Frontend Developer</p>
                  <div className="sm:hidden flex flex-col">
                    <p className="text-md font-medium">Material Depo</p>
                    <p className="text-xs">May 2024 - July 2024</p>
                  </div>
                </div>
                <p className="text-xs">
                  Working at Material Depo, I was responsible for developing and
                  maintaining the frontend of the website.
                </p>
                <div className="flex flex-col gap-2 text-xs">
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
        <div className="p-4 w-full py-6 flex flex-col gap-4">
          <p className="text-3xl font-medium">Projects</p>
          <div className="flex flex-col gap-12 w-full">
            <ProjectCard
              title="Sync Code"
              description="Sync Code is a collaborative, real-time code editor where users can seamlessly code together. It provides a platform for multiple users to enter a room, share a unique room ID, and collaborate on code simultaneously. Users can seamlessly edit and download files while communicating through group chat."
              githubLink="https://github.com/anuprajvarma/Sync_Code"
              liveLink="https://sync-code1.herokuapp.com/"
              imageLink="/synccodeproject.png"
            />
            <ProjectCard
              title="Movie Hub"
              description="It is web application where people can search any movie and they can see movies details such as Director name,Genre."
              githubLink="https://github.com/anuprajvarma/moviehub"
              liveLink="https://moviehub1.vercel.app/"
              imageLink="/searchPage.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

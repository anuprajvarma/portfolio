import Image from "next/image";
import {
  PiGithubLogoThin,
  PiLinkedinLogo,
  PiTwitterLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";

const Home = () => {
  return (
    <div className="p-4 py-6 w-full flex flex-col gap-8">
      <div className="flex justify-between w-full">
        <div className="w-9/12 flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Anupraj Varma</h1>
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              I’m a software engineer and CEO of Vercel. I’m originally from
              Lanús, Buenos Aires, Argentina. I owe much of my career to the Web
              and open source.
            </p>
            <div className="flex gap-6 cursor-pointer">
              <Link
                href="https://www.linkedin.com/in/anuprajvarma/"
                target="_blank"
              >
                <PiLinkedinLogo size={25} />
              </Link>
              <Link href="https://github.com/anuprajvarma" target="_blank">
                <PiGithubLogoThin size={25} />
              </Link>
              <Link href="https://x.com/Anupraj_varma" target="_blank">
                <PiTwitterLogoLight size={25} />
              </Link>
              <Link href="https://www.youtube.com/@MarkVerma" target="_blank">
                <PiYoutubeLogoLight size={25} />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[7rem] w-[7rem]">
          <Image
            className="rounded-full"
            src="/portfolio_pic.png"
            alt="Portfolio pic"
            width={50}
            height={50}
            layout="responsive"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Featured Projects</h1>
        <div className="flex flex-col cursor-pointer">
          <div className="py-4 border-b border-grey-light hover:bg-grey">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium">
                7 Principles of Rich Web Applications
              </h2>
              <p>10 Mar, 2025</p>
            </div>
            <p className="font-medium">
              This is a writeup based on a presentation I gave at BrazilJS in
              August 2014....
            </p>
          </div>
          <div className="py-4 border-b border-grey-light hover:bg-grey">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium">
                7 Principles of Rich Web Applications
              </h2>
              <p>10 Mar, 2025</p>
            </div>
            <p className="font-medium">
              This is a writeup based on a presentation I gave at BrazilJS in
              August 2014....
            </p>
          </div>
          <div className="py-4 border-b border-grey-light hover:bg-grey">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium">
                7 Principles of Rich Web Applications
              </h2>
              <p>10 Mar, 2025</p>
            </div>
            <p className="font-medium">
              This is a writeup based on a presentation I gave at BrazilJS in
              August 2014....
            </p>
          </div>
          <div className="py-4 border-b border-grey-light hover:bg-grey">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium">
                7 Principles of Rich Web Applications
              </h2>
              <p>10 Mar, 2025</p>
            </div>
            <p className="font-medium">
              This is a writeup based on a presentation I gave at BrazilJS in
              August 2014....
            </p>
          </div>
          <div className="relative w-full flex justify-center">
            <div className="py-4 border-b w-full border-grey-light hover:bg-grey ">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">
                  7 Principles of Rich Web Applications
                </h2>
                <p>10 Mar, 2025</p>
              </div>
              <p className="font-medium">
                This is a writeup based on a presentation I gave at BrazilJS in
                August 2014....
              </p>
            </div>
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
  );
};

export default Home;

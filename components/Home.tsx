import Image from "next/image";
import {
  PiGithubLogoThin,
  PiLinkedinLogo,
  PiTwitterLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";

const Home = () => {
  return (
    <div className="p-4 gap-8 flex flex-col w-full">
      <div className="flex justify-between w-full">
        <div className="w-9/12 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Anupraj Varma</h1>
          <div className="flex flex-col gap-4">
            <p>
              I’m a software engineer and CEO of Vercel. I’m originally from
              Lanús, Buenos Aires, Argentina. I owe much of my career to the Web
              and open source.
            </p>
            <div className="flex gap-6 cursor-pointer">
              <PiLinkedinLogo size={25} />
              <PiGithubLogoThin size={25} />
              <PiTwitterLogoLight size={25} />
              <PiYoutubeLogoLight size={25} />
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-full"
            src="/portfolio_pic.png"
            alt="Portfolio pic"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Featured Projects</h1>
        <div className="flex flex-col cursor-pointer">
          <div className="py-6 border-b border-grey">
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
          <div className="py-6 border-b border-grey">
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
          <div className="py-6 border-b border-grey">
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
        </div>
      </div>
    </div>
  );
};

export default Home;

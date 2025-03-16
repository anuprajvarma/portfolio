import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      <div className="w-[40rem] m-auto">
        <div className="m-auto p-4 py-6 flex flex-col text-sm gap-2">
          <p className="text-3xl font-medium">About</p>
          <div className="flex justify-between gap-2 w-full">
            <div className="w-10/12 gap-4 flex flex-col">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some.
              </p>{" "}
              <p>
                form, by injected humour, or randomised words which don&apos;t
                look even slightly believable. If you are going to use a
                passage.
              </p>{" "}
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
          <p>
            There are many variations of passages of Ipsum available, but the
            majority have suffered alteration in some. There are many variations
            of passages of Ipsum available, but the majority.
          </p>{" "}
        </div>
        <div className="p-4 py-6 flex flex-col gap-4">
          <p className="text-3xl font-medium">Experience</p>
          <div className="flex gap-2 w-full">
            <div className="w-4/12 h-[300px]">
              <div className="h-[150px]">
                <div>
                  <p className="text-2xl font-medium">Kroto</p>
                  <p className="text-xs">Jan 2024 - Current</p>
                </div>
              </div>
              <div className="h-[150px]">
                <div>
                  <p className="text-2xl font-medium">Material Depo</p>
                  <p className="text-xs">Jan 2023 - Sep 2024</p>
                </div>
              </div>
            </div>
            <div className="h-[300px] relative">
              <div className="flex flex-col h-[162] items-center pt-3">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                <div className="w-[2px] h-full bg-white"></div>
              </div>
              <div className="h-[138] absolute bottom-0">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
              </div>
            </div>
            <div className="w-8/12 h-[300px] flex flex-col gap-2 pl-8">
              <div className="h-[150px] flex flex-col gap-2">
                <p className="text-2xl font-medium">Software Developer</p>
                <p className="text-xs">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                </p>
                <ul className="list-disc list-inside text-xs">
                  <li>There are many variations of passages of Lorem Ipsum </li>
                  <li>There are many variations of passages of Lorem Ipsum </li>
                  <li>There are many variations of passages of Lorem Ipsum </li>
                </ul>
              </div>
              <div className="h-[150px] flex flex-col gap-2">
                <p className="text-2xl font-medium">Frontend Developer</p>
                <p className="text-xs">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                </p>
                <ul className="list-disc list-inside text-xs">
                  <li>There are many variations of passages of Lorem Ipsum </li>
                  <li>There are many variations of passages of Lorem Ipsum </li>
                  <li>There are many variations of passages of Lorem Ipsum </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 py-6 flex flex-col gap-4">
          <p className="text-3xl font-medium">Projects</p>
          <div className="flex flex-row gap-16">
            <div className="bg-grey flex gap-3">
              <div className="">
                <Image
                  className=""
                  src="/portfolio_pic.png"
                  alt="Portfolio pic"
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </div>
              <div className="p-2">
                <p>Sync Code</p>
                <p className="text-xs line-clamp-2">
                  There are many variations of passages of Lorem Ipsum form, by
                  injected humour, or randomised words which{" "}
                </p>
              </div>
            </div>
            <div className="bg-grey flex gap-3">
              <div className="">
                <Image
                  className=""
                  src="/portfolio_pic.png"
                  alt="Portfolio pic"
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </div>
              <div className="p-2">
                <p>Sync Code</p>
                <p className="line-clamp-2 text-xs">
                  There are many variations of passages of Lorem Ipsum form, by
                  injected humour, or randomised words which...{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

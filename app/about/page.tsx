import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      <div className="m-auto p-4 py-6 flex flex-col gap-4 w-6/12">
        <p className="text-3xl font-medium">About</p>
        <div className="flex justify-between gap-2 w-full">
          <div className="w-10/12 gap-4 flex flex-col">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>{" "}
            <p>
              form, by injected humour, or randomised words which don&apos;t
              look even slightly believable. If you are going to use a passage.
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
    </div>
  );
}

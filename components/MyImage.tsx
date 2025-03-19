import Image from "next/image";

export function MyImage() {
  return (
    <Image
      className="rounded-full"
      src="/portfolio_pic.png"
      alt="Portfolio pic"
      width={50}
      height={50}
      layout="responsive"
    />
  );
}

export function ProjectImage({ imageLink }: { imageLink: string }) {
  return (
    <Image
      className="h-[8rem] w-[13rem] cursor-pointer"
      src={imageLink}
      alt="Portfolio pic"
      width={50}
      height={50}
    />
  );
}

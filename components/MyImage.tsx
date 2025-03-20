import Image from "next/image";

export function MyImage({
  picHeight,
  picWeight,
}: {
  picHeight: number;
  picWeight: number;
}) {
  return (
    <Image
      className="rounded-full cursor-pointer"
      style={{ height: picHeight, width: picWeight }}
      src="/portfolio_pic.png"
      alt="Portfolio pic"
      width={50}
      height={50}
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

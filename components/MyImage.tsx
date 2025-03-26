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
    <div className="relative w-[12rem] h-[8rem] cursor-pointer sm:flex hidden">
      <Image
        className="rounded-l-md"
        src={imageLink}
        alt="High-quality image"
        fill
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}

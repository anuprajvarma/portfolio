import Image from "next/image";

export default function MyImage() {
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

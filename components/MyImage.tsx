"use client";
// import { useState } from "react";
import Image from "next/image";
// import Modal from "./Modal";

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
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-[12rem] h-[8rem] cursor-pointer sm:flex hidden"
      // onClick={() => setIsOpen(true)}
    >
      <Image
        className="rounded-l-md"
        src={imageLink}
        alt="High-quality image"
        fill
        objectFit="cover"
        quality={100}
      />
      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold">This is a Modal</h2>
        <p>Content inside the modal.</p>
      </Modal> */}
    </div>
  );
}

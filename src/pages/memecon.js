import Image from "next/image";
import { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Style from "../styles/main.module.css";

export default function Memecon() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (value == 5 || value == 0) {
      setValue(1);
    }
  }, [value]);
  return (
    <div className={Style.memeDiv}>
      <div>
        <MdArrowBackIos
          className={Style.arrowIcon}
          onClick={() => setValue(value - 1)}
        />
      </div>
      <div className={Style.memeImage}>
        <Image
          src={`/meme${value}.jpg`}
          width="250"
          height="150"
          alt="memeImage"
        />
      </div>
      <div>
        <MdArrowForwardIos
          className={Style.arrowIcon}
          onClick={() => setValue(value + 1)}
        />
      </div>
    </div>
  );
}

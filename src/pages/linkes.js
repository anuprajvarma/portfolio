import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import { BsChatRightTextFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Style from "../styles/main.module.css";

export default function links() {
  const router = useRouter();
  return (
    <>
      <div className={Style.linkeDiv}>
        <Link href="https://anuprajvarma.vercel.app/" target="_blank">
          <div className={Style.linkText1}>Personal Portfolio</div>
        </Link>
      </div>
      <div className={Style.linkeDiv}>
        <Link
          href="https://www.linkedin.com/in/anupraj-varma-a04489208/"
          target="_blank"
        >
          <div className={Style.linkText2}>Connect to me on Linkedin</div>
        </Link>
      </div>
      <div className={Style.linkeDiv}>
        <Link href="https://github.com/anuprajvarma" target="_blank">
          <div className={Style.linkText3}>Follow me on GitHub</div>
        </Link>
      </div>
      <div className={Style.linkeDiv}>
        <Link href="https://twitter.com/Anupraj_varma" target="_blank">
          <div className={Style.linkText4}>
            Let's all laugh together at tech Twitter memes
          </div>
        </Link>
      </div>
      <div className={Style.linkeDiv}>
        <Link href="https://www.instagram.com/anupraj_verma/" target="_blank">
          <div className={Style.linkText5}>Instagram</div>
        </Link>
      </div>
      <BsChatRightTextFill
        className={Style.icon}
        onClick={() => router.push("mailto:anupraj1854@gmail.com")}
      />
    </>
  );
}

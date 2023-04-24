import Image from "next/image";
import Style from "../styles/main.module.css";

export default function Profile() {
  return (
    <>
      <Image
        className={Style.profileImage}
        src={"/profilePhoto2.png"}
        width="130"
        height="130"
        alt="ProfileImage"
      />
      <p className={Style.myname}>Anupraj Varma</p>
      <div className={Style.skillSec}>
        <div className={Style.skillDiv1}>Nextjs</div>
        <div className={Style.skillDiv2}>Javascript</div>
        <div className={Style.skillDiv3}>Talwind CSS</div>
        <div className={Style.skillDiv4}>Expressjs</div>
        <div className={Style.skillDiv5}>MongoDB</div>
      </div>
    </>
  );
}

import {
  PiGithubLogoThin,
  PiLinkedinLogo,
  PiTwitterLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";
import { CiLink } from "react-icons/ci";
import Link from "next/link";

export function Github() {
  return (
    <Link href="https://github.com/anuprajvarma" target="_blank">
      <PiGithubLogoThin size={25} />
    </Link>
  );
}

export function Linkedin() {
  return (
    <Link href="https://www.linkedin.com/in/anuprajvarma/" target="_blank">
      <PiLinkedinLogo size={25} />
    </Link>
  );
}

export function Twitter() {
  return (
    <Link href="https://x.com/Anupraj_varma" target="_blank">
      <PiTwitterLogoLight size={25} />
    </Link>
  );
}

export function Youtube() {
  return (
    <Link href="https://www.youtube.com/@MarkVerma" target="_blank">
      <PiYoutubeLogoLight size={25} />
    </Link>
  );
}

export function link() {
  return (
    <Link href="https://sync-code1.herokuapp.com/" target="_blank">
      <CiLink size={25} />
    </Link>
  );
}

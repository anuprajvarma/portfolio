import Head from "next/head";
import MemeCon from "./memecon";
import Profile from "./profile";
import Links from "./linkes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anupraj Verma</title>
      </Head>
      <Profile />
      <MemeCon />
      <Links />
    </>
  );
}

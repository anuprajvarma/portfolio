import Head from "next/head";
import MemePage from "./memePage";
import Profile from "./profile";
import Links from "./linkes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anupraj Verma</title>
      </Head>
      <Profile />
      <MemePage />
      <Links />
    </>
  );
}

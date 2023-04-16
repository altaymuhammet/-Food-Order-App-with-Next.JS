import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Home from "./home";
import Header from "../Components/Layout/Header";

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <Home />
      </main>
    </>
  );
}
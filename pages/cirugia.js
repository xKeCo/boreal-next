import React from "react";
import DinamicPage from "../components/DinamicPage";
import Head from "next/head";

export default function implenates() {
  return (
    <>
      <Head>
        <title>Cirugia - Boreal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <DinamicPage title="Cirugia" subtitle="Cirugia dental" />
    </>
  );
}

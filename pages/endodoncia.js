import React from "react";
import DinamicPage from "../components/DinamicPage";
import Head from "next/head";

export default function implenates() {
  return (
    <>
      <Head>
        <title>Endodoncia - Boreal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <DinamicPage
        title="Endodoncia"
        subtitle="La endodoncia es una técnica que permite restaurar la forma de los dientes."
      />
    </>
  );
}

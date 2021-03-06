import React from "react";
import DinamicPage from "../components/DinamicPage";
import Head from "next/head";

export default function implenates() {
  return (
    <>
      <Head>
        <title>Odontologia General - Boreal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <DinamicPage
        title="Odontologia General"
        subtitle="La odontologia general es una técnica que permite restaurar la forma de los dientes."
      />
    </>
  );
}

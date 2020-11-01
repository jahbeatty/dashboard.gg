import { useRouter } from "next/router";
import React from "react";
import Header from "../../../components/Header";

function Champion() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Header />
      <h1>Champion Name: {name}</h1>
    </>
  );
}

export default Champion;

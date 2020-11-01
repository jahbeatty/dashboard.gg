import React from "react";
import { Center, Image } from "@chakra-ui/core";

function LolLogo() {
  return (
    <>
      <a href="/">
        <Center>
          <Image
            src={require("../../public/images/lol-logo.png")}
            alt="lol logo"
            width="30%"
          />
        </Center>
      </a>
    </>
  );
}

export default LolLogo;

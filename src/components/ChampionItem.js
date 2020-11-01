import React from "react";
import { Box, Center, Image } from "@chakra-ui/core";
import Link from "next/link";

function ChampionItem({ item }) {
  return (
    <>
      <Box>
        <Center>
          <div>{item.name}</div>
        </Center>
        <Link as={`/champion/${item.name}`} href="/champion/[name]">
          <Image
            name={item.name}
            src={`https://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${item.image.full}`}
            key={item.key}
          />
        </Link>
      </Box>
    </>
  );
}

export default ChampionItem;

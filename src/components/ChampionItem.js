import React from "react";
import { Box, Center, Image } from "@chakra-ui/core";
import Link from "next/link";

const ChampionItem = ({ item }) => {
  return (
    <>
      <Box>
        <Center>
          <div>{item.name}</div>
        </Center>
        <Link as={`/champions/${item.id}`} href="/champions/[id]">
          <Image
            name={item.name}
            src={`https://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${item.image.full}`}
            key={item.key}
            rounded="full"
          />
        </Link>
      </Box>
    </>
  );
};

export default ChampionItem;

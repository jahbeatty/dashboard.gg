import React from "react";
import { Box, Center, Image } from "@chakra-ui/core";

function ChampionItem({ item }) {
  return (
    <>
      <Box>
        <Center>
          <div>{item.name}</div>
        </Center>
        <a
          href={`https://na.leagueoflegends.com/en-us/champions/${item.name.toLowerCase()}`}
        >
          <Image
            name={item.name}
            src={`https://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${item.image.full}`}
            key={item.key}
          />
        </a>
      </Box>
    </>
  );
}

export default ChampionItem;

import React from 'react';
import { Box, Center } from "@chakra-ui/core";

function ChampionItem({ item }) {
    return (
        <>
        <Box>
        <Center>
        <div>
            {item.name}
        </div>
        </Center>
        <img 
            name={item.name} 
            src={`https://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${item.image.full}`}
            key={item.key}
        />
        </Box>
        </>
    )
}

export default ChampionItem

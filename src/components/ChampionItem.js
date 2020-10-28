import React from 'react';
import { Grid, Box, Stack } from "@chakra-ui/core";

function ChampionItem({ item }) {
    return (
        <>
        <Box>
        <div>
            {item.name}
        </div>
        <img 
            name={item.name} 
            src={`https://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${item.image.full}`}
        />
        </Box>
        </>
    )
}

export default ChampionItem

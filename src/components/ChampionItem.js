import React from 'react';
import { Flex } from "@chakra-ui/core";

function ChampionItem({ item }) {
    return (
        <>
        <div>
            {item.name}
        </div>
        <Flex>
            <img 
                name={item.name} 
                src={`https://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/${item.image.full}`}
            />
        </Flex>
        </>
    )
}

export default ChampionItem

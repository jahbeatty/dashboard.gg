import React from 'react';
import ChampionItem from './ChampionItem'
import { Grid, Stack, Flex } from '@chakra-ui/core';

const ChampionList = ({ championData, loading }) => {

    const championDataArray = Object.entries(championData);
    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <section>

             {/* Grid of champions */}
            <Grid templateColumns="repeat(4, 1fr)" gap={2}>    
            {Object.values(championData).map((item) =>(
                <>
                <Flex>
                <ChampionItem key={item.id} item={item}></ChampionItem>
                </Flex>
                </>
            ))}
            </Grid>

        </section>
    )
}


export default ChampionList;

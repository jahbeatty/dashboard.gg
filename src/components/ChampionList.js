import React from "react";
import ChampionItem from "./ChampionItem";
import { Grid, Flex, Center, Image, Box } from "@chakra-ui/core";

const ChampionList = ({ championData, loading }) => {
  return loading ? (
    <h1>Loading...</h1>
  ) : championData.length !== 0 ? (
    <section>
      {/* Grid of champions */}
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {Object.values(championData).map((item) => (
          <Flex key={item.id}>
            <ChampionItem key={item.id} item={item}></ChampionItem>
          </Flex>
        ))}
      </Grid>
    </section>
  ) : (
    <section>
      <Box>
        <Center>
          <h1>No Champions Found</h1>
        </Center>
        <Center>
          <Image
            src={require("../../public/images/amumu.png")}
            alt="sad mummy"
            width="30%"
          />
        </Center>
      </Box>
    </section>
  );
};

export default ChampionList;

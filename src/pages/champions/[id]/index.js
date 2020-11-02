import React, { Component } from "react";
import { Box, Flex, Center, Image } from "@chakra-ui/core";

export default class Champion extends Component {
  static async getInitialProps({ query }) {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion/${query.id}.json`
    );
    const json = await res.json();
    const data = json.data;
    return data[`${query.id}`];
  }

  render() {
    const data = this.props.pageProps;
    console.log(data);
    return (
      <>
        <Box>
          <Center>
            <h1>Name: {data.name}</h1>
          </Center>
          <Center>
            <Image
              name={data.name}
              src={`https://universe-meeps.leagueoflegends.com/v1/assets/images/${data.name.toLowerCase()}-splash.jpg`}
              width={600}
            />
          </Center>
          <h2>Lore: {data.lore}</h2>
        </Box>
      </>
    );
  }
}

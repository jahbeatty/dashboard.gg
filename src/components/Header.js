import React from "react";
import { Box, Flex, Image, Center, Text } from "@chakra-ui/core";
import Link from "next/link";
import { Link as CLink } from "@chakra-ui/core";

function Header() {
  return (
    <>
      <Flex bg="navy" p={4}>
        <Box ml={"auto"} className="menu-items">
          <Link href="/">
            <CLink
              cursor="pointer"
              fontSize={20}
              position="absolute"
              left={20}
              color="White"
            >
              Dashboard
            </CLink>
          </Link>
          <Link href="/about">
            <CLink cursor="pointer" fontSize={20} mr={20} color="white">
              About
            </CLink>
          </Link>
          <Link href="/champions">
            <CLink cursor="pointer" fontSize={20} mr={20} color="white">
              Champions
            </CLink>
          </Link>
          <Link href="/">
            <CLink cursor="pointer" fontSize={20} mr={20} color="white">
              Register
            </CLink>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default Header;

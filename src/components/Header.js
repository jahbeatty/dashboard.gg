import React from 'react'
import { Image, Center } from "@chakra-ui/core"

function Header() {
    return (
        <header>
            
            <a href="/">
            <Center>
                <Image  
                    src={require('../../public/images/lol-logo.png')} 
                    alt="lol logo" 
                    width='30%'
                />
            </Center>
            </a>
            
        </header>
    )
}

export default Header

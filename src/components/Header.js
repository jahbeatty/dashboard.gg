import React from 'react'
import { Image, Center } from "@chakra-ui/core"

function Header() {
    return (
        <header>
            <Center>
                <Image  
                    src={require('../../public/images/lol-logo.png')} 
                    alt="lol logo" 
                    size='150px'
                    width='50%'
                />
            </Center>
        </header>
    )
}

export default Header

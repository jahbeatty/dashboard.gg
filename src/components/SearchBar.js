import React from 'react'
import { Input, Center } from '@chakra-ui/core'

function SearchBar() {
    return (
        <div>
            <Center>
                <Input variant="outline" placeholder="Select a Champion" />
            </Center>
        </div>
    )
}

export default SearchBar

import React from 'react'
import { Box, Stack, VStack, HStack, Heading, Input, Button, Text} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bg={"blackAlpha.900"} minH="40" p="5" pt="8" color={"white"}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems="stretch" w={"full"} px="4">
                <Heading fontSize={"xl"} w="full" textAlign={["center", "left"]}>
                    Subscribe to our news letter
                </Heading>

                <HStack>
                    <Input size={"sm"} placeholder="Enter your email" type="email" required />

                    <Button
                        colorScheme={'purple'}
                        w={"fit-content"}
                        size={"sm"} fontSize="smaller"
                    >
                    Subscribe
                    </Button>
                </HStack>
            </VStack>

            <VStack
            w={"full"}
            borderLeft={["none", "1px solid white"]}
            borderRight={["none", "1px solid white"]}>
                <Heading>Video Hub</Heading>
                <Text color={"whiteAlpha.500"}>Copyrights © 2022</Text>
            </VStack>

            <VStack w={"full"}>
                <Heading>Socials</Heading>
                <HStack gap={5} pt="3">
                    <Button variant={'link'} rounded={'none'} m={'0'}>linkedin</Button>
                    <Button variant={'link'} rounded={'none'} m={'0'}>Github</Button>
                    <Button variant={'link'} rounded={'none'} m={'0'}>Twitter</Button>
                </HStack>
            </VStack>
        </Stack>
    </Box>
    )
}

export default Footer
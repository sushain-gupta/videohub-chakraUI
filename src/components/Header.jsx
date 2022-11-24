import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <Button zIndex={"overlay"} position={'fixed'} top={'2'} left={'2'} colorScheme='purple' padding={'0'} width={'10'} height={'10'} borderRadius={'full'}>
                <BiMenuAltLeft size={30} onClick={onOpen} />
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton top={4}/>
                    <DrawerHeader>Video hub</DrawerHeader>

                <DrawerBody>
                    <VStack alignItems={"flex-start"}>
                        <Button onClick={onClose} variant={'ghost'} left={"0"} colorScheme={'purple'}>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                            <Link to={"/videos"}>Videos</Link>
                        </Button>
                        
                        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                            <Link to={"/videos?category=free"}>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                            <Link to={"/upload"}>Upload Video</Link>
                        </Button>
                    </VStack>
                </DrawerBody>

                    <HStack marginTop={2} pos={"absolute"} bottom={10} width={"full"} justify={'space-evenly'}>
                        <Button onClick={onClose} colorScheme={"purple"}>
                            <Link to={"/login"}>Log in</Link>
                        </Button>
                        <Button onClick={onClose} variant={"outline"} colorScheme={"purple"}>
                            <Link to={"/signup"}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
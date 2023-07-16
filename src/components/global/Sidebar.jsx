import React from 'react';
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
  Link,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        position={'fixed'}
        top={'2'}
        left={'2'}
        colorScheme="purple"
        padding={'0'}
        width={'10'}
        height={'10'}
        borderRadius={'full'}
      >
        <BiMenuAltLeft size={30} onClick={onOpen} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton top={4} />
          <DrawerHeader>Video hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Link
                as={NavLink}
                _hover={{ textDecoration: 'none' }}
                to={'/'}
                fontWeight={'medium'}
                color={'purple.600'}
                onClick={onClose}
                width={'full'}
                padding={'2'}
                paddingX={'4'}
                rounded={'md'}
                _activeLink={{ background: 'purple.100' }}
              >
                Home
              </Link>

              <Link
                as={NavLink}
                _hover={{ textDecoration: 'none' }}
                to={'/videos'}
                fontWeight={'medium'}
                color={'purple.600'}
                onClick={onClose}
                width={'full'}
                padding={'2'}
                paddingX={'4'}
                rounded={'md'}
                _activeLink={{ background: 'purple.100' }}
              >
                Videos
              </Link>

              <Link
                as={NavLink}
                _hover={{ textDecoration: 'none' }}
                to={'/upload'}
                fontWeight={'medium'}
                color={'purple.600'}
                onClick={onClose}
                width={'full'}
                padding={'2'}
                paddingX={'4'}
                rounded={'md'}
                _activeLink={{ background: 'purple.100' }}
              >
                Upload Videos
              </Link>
            </VStack>
          </DrawerBody>

          <HStack
            marginTop={2}
            pos={'absolute'}
            bottom={10}
            width={'full'}
            justify={'space-evenly'}
          >
            <Button onClick={onClose} colorScheme={'purple'}>
              <NavLink to={'/login'}>Log in</NavLink>
            </Button>
            <Button
              onClick={onClose}
              variant={'outline'}
              colorScheme={'purple'}
            >
              <NavLink to={'/signup'}>Sign Up</NavLink>
            </Button>
          </HStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;

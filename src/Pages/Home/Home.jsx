import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import image from '../../assets/4.jpg';
import MyCarousel from '../../components/MyCarousel';
import Sidebar from '../../components/global/Sidebar';

const Home = () => {
  return (
    <Box>
      <Sidebar />

      <MyCarousel />

      <Container maxW="container.xl" minH={'100vh'} p={16}>
        <Heading
          borderBottom={'1px solid'}
          m="auto"
          width={'fit-content'}
          py="2"
        >
          Title
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={image}
            h={['40', '400']}
            rounded={'full'}
            filter={'grayscale(100%)'}
            _hover={{ filter: 'grayscale(0)' }}
          />

          <Text lineHeight={'190%'} letterSpacing="widest" p={['4', '16']}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            neque deleniti repudiandae eum quasi facere porro reiciendis quo?
            Blanditiis incidunt aut placeat praesentium voluptatem iusto sit
            alias consequatur nihil? Ipsam.
          </Text>
        </Stack>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row-reverse']}
        >
          <Image
            src={image}
            h={['40', '400']}
            rounded={'full'}
            filter={'grayscale(100%)'}
            _hover={{ filter: 'grayscale(0)' }}
          />

          <Text lineHeight={'190%'} letterSpacing="widest" p={['4', '16']}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            neque deleniti repudiandae eum quasi facere porro reiciendis quo?
            Blanditiis incidunt aut placeat praesentium voluptatem iusto sit
            alias consequatur nihil? Ipsam.
          </Text>
        </Stack>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={image}
            h={['40', '400']}
            rounded={'full'}
            filter={'grayscale(100%)'}
            _hover={{ filter: 'grayscale(0)' }}
          />

          <Text lineHeight={'190%'} letterSpacing="widest" p={['4', '16']}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            neque deleniti repudiandae eum quasi facere porro reiciendis quo?
            Blanditiis incidunt aut placeat praesentium voluptatem iusto sit
            alias consequatur nihil? Ipsam.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

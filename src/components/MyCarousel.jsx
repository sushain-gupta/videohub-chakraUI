import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const headingOpt = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOpt}>
          Text 1
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOpt}>
          Text 2
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOpt}>
          Text 3
        </Heading>
      </Box>
    </Carousel>
  );
};

export default MyCarousel;

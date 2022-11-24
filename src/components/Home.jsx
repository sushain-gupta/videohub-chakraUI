import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const headingOpt = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};

const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container  maxW='container.xl' minH={'100vh'} p={16}>
            <Heading borderBottom={"1px solid"} m="auto" width={'fit-content'} py="2">
                Title
            </Heading>

            <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>
                <Image src={img4} h={["40", "400"]} rounded={'full'} filter={"grayscale(100%)"} _hover={{filter: "grayscale(0)"}}/>

                <Text lineHeight={'190%'} letterSpacing="widest" p={["4", "16"]}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque deleniti repudiandae eum quasi facere porro reiciendis quo? Blanditiis incidunt aut placeat praesentium voluptatem iusto sit alias consequatur nihil? Ipsam.
                </Text>
            </Stack>

            <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row-reverse"]}>
                <Image src={img4} h={["40", "400"]} rounded={'full'} filter={"grayscale(100%)"} _hover={{filter: "grayscale(0)"}}/>

                <Text lineHeight={'190%'} letterSpacing="widest" p={["4", "16"]} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque deleniti repudiandae eum quasi facere porro reiciendis quo? Blanditiis incidunt aut placeat praesentium voluptatem iusto sit alias consequatur nihil? Ipsam.
                </Text>
            </Stack>

            <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>
                <Image src={img4} h={["40", "400"]} rounded={'full'} filter={"grayscale(100%)"} _hover={{filter: "grayscale(0)"}}/>

                <Text lineHeight={'190%'} letterSpacing="widest" p={["4", "16"]}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque deleniti repudiandae eum quasi facere porro reiciendis quo? Blanditiis incidunt aut placeat praesentium voluptatem iusto sit alias consequatur nihil? Ipsam.
                </Text>
            </Stack>
        </Container>
    </Box>
  )
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
            <Box w={"full"} h={'100vh'}>
                <Image src={img1} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOpt}>Text 1</Heading>
            </Box>
            <Box w={"full"} h={'100vh'}>
                <Image src={img2} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOpt}>Text 2</Heading>
            </Box>
            <Box w={"full"} h={'100vh'}>
                <Image src={img3} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOpt}>Text 3</Heading>
            </Box>
        </Carousel>
    )

}

export default Home
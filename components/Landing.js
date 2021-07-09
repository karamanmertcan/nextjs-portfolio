import { Box, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { MY_IMAGE } from '../config/SOCIAL_MEDIA';

export default function Landing({ image }) {
  return (
    <Box h="auto" w="100%" borderBottom="2px" py="5rem">
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <Fade left>
          <Box
            w="100%"
            h="auto"
            mt="25%"
            ml="30px"
            textAlign={{ base: 'center', md: 'left', lg: 'left' }}>
            <Text fontSize="6xl" fontWeight="700">
              I KEEP ON
            </Text>

            <Text
              bgGradient="linear(to-r,#5433ff, #20bdff, #a5fecb)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold">
              GROWING.
            </Text>

            <Flex justify={{ base: 'center', md: 'start' }} align="center">
              <Box bgGradient="linear(to-r,#5433ff, #20bdff, #a5fecb)" w="40px" h="5px" mr="10px" />
              <Text fontSize="5xl" fontWeight="700">
                Mertcan Karaman
              </Text>
            </Flex>

            <Text fontSize="xl" mt="10px" fontWeight="bold">
              Hello, I am a full stack developer and engineer. I'm studying at Kadir Has Universtiy.
              Currently, I am based in Istanbul, Turkey.
            </Text>
          </Box>
        </Fade>

        <Fade right>
          <Box w="100%" py="25px" height="100%" display={{ base: 'none', md: 'inline-block' }}>
            <Flex align="center" justify="center">
              <Image src={image} height={500} width={400} />
            </Flex>
          </Box>
        </Fade>
      </SimpleGrid>
    </Box>
  );
}

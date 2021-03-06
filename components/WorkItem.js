import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

export default function WorkItem({ title, excerpt, mainImage, date, hex, target }) {
  const { url } = mainImage.asset;

  return (
    <Fade>
      <Flex direction={{ base: 'column' }} mt="60px" boxShadow="2xl">
        <Flex h="300px" w="100%" bgGradient={`linear(to-r, ${hex} ) `} borderTopRadius="20px">
          <Box mx="auto" my="auto">
            <Image src={url + '?h=200&w=200'} alt="" boxSize="320px" objectFit="contain" />
          </Box>
        </Flex>
        <Flex h="auto" w="100%" bg="gray.200">
          <Box p="30px">
            <Text color="black" fontSize="3xl" fontWeight="bold">
              {title}
            </Text>
            <Text color="black" fontSize="lg" fontWeight="200" mt="20px">
              {excerpt}
            </Text>
            <Flex mt="30px" justify="space-between" align="center">
              <Text color="black">{date}</Text>
              <Link href={target}>
                <Button colorScheme="blue">See Live</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fade>
  );
}

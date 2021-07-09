import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';

export default function WorkItem({ title, excerpt, mainImage, date }) {
  const { url } = mainImage.asset;

  return (
    <Flex direction={{ base: 'column' }} mt="60px">
      <Flex h="300px" w="100%" bgGradient="linear(to-r, #3a7bd5, #3a6073)" borderTopRadius="20px">
        <Box mx="auto" my="auto">
          <Image src={url} alt="" boxSize="320px" objectFit="contain" />
        </Box>
      </Flex>
      <Flex h="auto" w="100%" bg="gray.200" borderBottomRadius="20px">
        <Box p="30px">
          <Text color="black" fontSize="3xl" fontWeight="bold">
            {title}
          </Text>
          <Text color="black" fontSize="lg" fontWeight="200" mt="20px">
            {excerpt}
          </Text>
          <Flex mt="30px" justify="space-between" align="center">
            <Text>{date}</Text>
            <Button colorScheme="blue">See Live</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

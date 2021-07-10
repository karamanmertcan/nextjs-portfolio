import { Box, Container, Flex, Text } from '@chakra-ui/react';

export default function Copyright({ todayDate }) {
  return (
    <Box bg="black" w="100%" py="5rem">
      <Container maxW="container.xl">
        <Flex direction="column" justify="center" align="center">
          <Text color="white" fontSize="2xl" fontWeight="bold">
            &copy; Mertcan Karaman
          </Text>
          <Text color="white" mt="20px" fontSize="3xl" fontWeight="bold">
            {todayDate}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

import {
  Container,
  Text,
  Box,
  Flex,
  useColorMode,
  Grid,
  Button,
  Switch,
  Spacer
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box boxShadow="xl" w="100%" py={10}>
      <Container maxW="container.xl">
        <Flex align="center" justify={{ base: 'center' }}>
          <Text fontWeight="700" fontSize="3xl">
            mertcankaraman.
          </Text>
          <Spacer />
          <Grid templateColumns="repeat(6, 1fr)" gap={6} display={{ base: 'none', md: 'grid' }}>
            <Link href="/">
              <a>
                <Text fontSize="xl" fontWeight="bold">
                  Home
                </Text>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Text fontSize="xl" fontWeight="bold">
                  About
                </Text>
              </a>
            </Link>
            <Link href="/work">
              <a>
                <Text fontSize="xl" fontWeight="bold">
                  Work
                </Text>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Text fontSize="xl" fontWeight="bold">
                  Contact
                </Text>
              </a>
            </Link>
            <Link href="https://mecox-blog.netlify.app/">
              <a href="https://mecox-blog.netlify.app/" target="_blank">
                <Button colorScheme="blue" borderRadius="20px" w="100px">
                  Blog
                </Button>
              </a>
            </Link>
          </Grid>
          <Spacer />
          <Box>
            <Switch onChange={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</Switch>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

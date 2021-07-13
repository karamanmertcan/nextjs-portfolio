import { Box, Container, Flex, Text, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialShare from './SocialShare';

export default function Footer() {
  return (
    <Box w="100" h="auto" bg="#282B31" py="50px">
      <Container maxW="container.xl">
        <Flex justify="center" align="center" direction="column">
          <Text fontWeight="700" color="#fff" fontSize="3xl" mt="20px">
            mertcankaraman.com
          </Text>
          <Text fontWeight="200" color="gray.500" fontSize="xl" mt="20px">
            Passionate developer and engineer
          </Text>
          <Text fontWeight="bold" color="#fff" fontSize="3xl" mt="20px">
            Site Map
          </Text>
          <Flex direction="row" mt="20px">
            <Link href="/">
              <a>
                <Text color="gray.500" fontWeight="bold" fontSize="lg" mr="20px">
                  Home
                </Text>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Text color="gray.500" fontWeight="bold" fontSize="lg" mr="20px">
                  About
                </Text>
              </a>
            </Link>
            <Link href="/work">
              <a>
                <Text color="gray.500" fontWeight="bold" fontSize="lg" mr="20px">
                  Work
                </Text>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Text color="gray.500" fontWeight="bold" fontSize="lg" mr="20px">
                  Contact
                </Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text color="gray.500" fontWeight="bold" fontSize="lg">
                  Blog
                </Text>
              </a>
            </Link>
          </Flex>
          <Text fontWeight="bold" color="#fff" fontSize="3xl" mt="20px">
            Follow Me
          </Text>
          <Flex direction="row" mt="20px">
            <Box mr="20px">
              <Link href="https://www.instagram.com/karaman_mertcan/">
                <a href="https://www.instagram.com/karaman_mertcan/" target="_blank">
                  <FaInstagram size={50} color="white" />
                </a>
              </Link>
            </Box>

            <Box mr="20px">
              <Link href="https://github.com/karamanmertcan">
                <a href="https://github.com/karamanmertcan" target="_blank">
                  <FaGithub size={50} color="black" />
                </a>
              </Link>
            </Box>

            <Box>
              <Link href="https://www.linkedin.com/in/mertcan-karaman-398769169/">
                <a href="https://www.linkedin.com/in/mertcan-karaman-398769169/" target="_blank">
                  <FaLinkedin size={50} color="blue" />
                </a>
              </Link>
            </Box>
          </Flex>

          <Text fontWeight="bold" color="#fff" fontSize="3xl" mt="20px">
            Share
          </Text>
          <SimpleGrid columns={[1, null, 4]} spacing="20px" mt="20px">
            <SocialShare />
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}

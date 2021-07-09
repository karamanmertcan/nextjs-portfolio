import Link from 'next/link';
import { Box, Text, SimpleGrid, Flex, Button, Divider } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

export default function Section() {
  return (
    <div>
      <Fade bottom>
        <Box w="100%" h="auto" pt="5rem">
          <Flex justify="center">
            <SimpleGrid columns={[2, null, 6]} spacing="30px">
              <Box height="80px">
                <Text fontSize={['lg', 'xl', '2xl']} fontWeight="bold">
                  Creative.
                </Text>
              </Box>
              <Box height="80px">
                <Text fontSize={['lg', 'xl', '2xl']} fontWeight="bold">
                  Hard-Working.
                </Text>
              </Box>
              <Box height="80px">
                <Text fontSize={['lg', 'xl', '2xl']} fontWeight="bold">
                  Passionate.
                </Text>
              </Box>
              <Box height="80px">
                <Text fontSize={['lg', 'xl', '2xl']} fontWeight="bold">
                  Motivated.
                </Text>
              </Box>
              <Box height="80px">
                <Text fontSize={['lg', 'xl', '2xl']} fontWeight="bold">
                  Reliable.
                </Text>
              </Box>
              <Box height="80px">
                <Text fontSize={['lg', 'xl', '2xl']} fontWeight="bold">
                  Productive.
                </Text>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>
      </Fade>

      <Box w="100%" h="auto" pt="20px">
        <Flex direction="column" align="center">
          <Fade>
            <Text
              fontSize={['lg', 'xl', '6xl']}
              fontWeight="bold"
              _hover={{
                borderBottom: '1px',
                transition: 'ease-out 1s'
              }}>
              About
            </Text>
          </Fade>
          <SimpleGrid columns={[1, null, 2]} spacing="40px">
            <Fade left>
              <Box w="100%" py="25px" height="100%" display={{ base: 'none', md: 'inline-block' }}>
                <Flex align="center" justify="center">
                  <Image src="/images/fundamentals.svg" height={500} width={400} />
                </Flex>
              </Box>
            </Fade>
            <Fade right>
              <Box
                w="100%"
                h="auto"
                mt="25%"
                ml="30px"
                textAlign={{ base: 'center', md: 'left', lg: 'left' }}>
                <Text fontSize="5xl" fontWeight="bold">
                  Hi, my name is Mertcan Karaman
                </Text>

                <Flex justify={{ base: 'center', md: 'start' }} align="center">
                  <Box
                    bgGradient="linear(to-r,#5433ff, #20bdff, #a5fecb)"
                    w="40px"
                    h="5px"
                    mr="10px"
                  />
                  <Text fontSize="2xl" fontWeight="bold">
                    I am a creative developer who has a great passion for learning engineering.😎
                    Currently I work in Tokyo as a software developer. Please find out more!
                  </Text>
                </Flex>
                <Box w="100%" mt="20px">
                  <Link href="/about">
                    <a>
                      <Button colorScheme="blue" borderRadius="20px" w="100%">
                        About
                      </Button>
                    </a>
                  </Link>
                </Box>
              </Box>
            </Fade>
          </SimpleGrid>
        </Flex>
      </Box>

      <Box w="100%" h="auto" pt="20px">
        <Flex direction="column" align="center">
          <Fade>
            <Text
              fontSize={['lg', 'xl', '6xl']}
              fontWeight="bold"
              _hover={{
                borderBottom: '1px',
                transition: 'ease-out 1s'
              }}>
              Work
            </Text>
          </Fade>
          <SimpleGrid columns={[1, null, 2]} spacing="40px">
            <Fade left>
              <Box
                w="100%"
                h="auto"
                mt="25%"
                ml="30px"
                textAlign={{ base: 'center', md: 'left', lg: 'left' }}>
                <Text fontSize="5xl" fontWeight="bold">
                  I constantly make new productions.
                </Text>

                <Flex justify={{ base: 'center', md: 'start' }} align="center">
                  <Box
                    bgGradient="linear(to-r,#5433ff, #20bdff, #a5fecb)"
                    w="40px"
                    h="5px"
                    mr="10px"
                  />
                  <Text fontSize="2xl" fontWeight="bold">
                    I'm working steadily for improving my self eveyday.I love learning a lot of
                    things while making productions.Find out more about my works.
                  </Text>
                </Flex>
                <Box w="100%" mt="20px">
                  <Link href="/work">
                    <a>
                      <Button colorScheme="blue" borderRadius="20px" w="100%">
                        Work
                      </Button>
                    </a>
                  </Link>
                </Box>
              </Box>
            </Fade>

            <Fade left>
              <Box w="100%" py="25px" height="100%" display={{ base: 'none', md: 'inline-block' }}>
                <Flex align="center" justify="center">
                  <Image src="/images/showcase.svg" height={500} width={400} />
                </Flex>
              </Box>
            </Fade>
          </SimpleGrid>
        </Flex>
      </Box>

      <Box w="100%" h="auto" pt="20px">
        <Flex direction="column" align="center">
          <Fade>
            <Text
              fontSize={['lg', 'xl', '6xl']}
              fontWeight="bold"
              _hover={{
                borderBottom: '1px',
                transition: 'ease-out 1s'
              }}>
              Contact
            </Text>
          </Fade>
          <SimpleGrid columns={[1, null, 2]} spacing="40px">
            <Fade left>
              <Box w="100%" py="25px" height="100%" display={{ base: 'none', md: 'inline-block' }}>
                <Flex align="center" justify="center">
                  <Image src="/images/online.svg" height={500} width={400} />
                </Flex>
              </Box>
            </Fade>
            <Fade right>
              <Box
                w="100%"
                h="auto"
                mt="25%"
                ml="30px"
                textAlign={{ base: 'center', md: 'left', lg: 'left' }}>
                <Text fontSize="5xl" fontWeight="bold">
                  Don't hesitate to contact me.
                </Text>

                <Flex justify={{ base: 'center', md: 'start' }} align="center">
                  <Box
                    bgGradient="linear(to-r,#5433ff, #20bdff, #a5fecb)"
                    w="40px"
                    h="5px"
                    mr="10px"
                  />
                  <Text fontSize="2xl" fontWeight="bold">
                    I am always waiting for a message from you. I would be so happy to hear from you
                    for an interview and a possible job offer.
                  </Text>
                </Flex>
                <Box w="100%" mt="20px">
                  <Link href="/work">
                    <a>
                      <Button colorScheme="blue" borderRadius="20px" w="100%">
                        Contact Me
                      </Button>
                    </a>
                  </Link>
                </Box>
              </Box>
            </Fade>
          </SimpleGrid>
        </Flex>
      </Box>
    </div>
  );
}

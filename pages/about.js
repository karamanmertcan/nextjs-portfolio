import { Box, Text, SimpleGrid, Flex, Container, Button, Image } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <Layout>
      <Container maxW="container.xl">
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
                  About Me
                </Text>

                <Text fontSize="xl" mt="10px">
                  Hello, my name is Mertcan. I'm bachelor student in Kadir Has University. My
                  department is Computer Engineering .I'm in 2nd grade . My Gpa is 3.14 . I'm very
                  passionate about web development. I know HTML5, CSS , JS , Bootstrap,React JS ,
                  Node JS, Mongo DB , Express .I’m interested in these technologies.
                </Text>

                <Text fontSize="xl" mt="20px">
                  I love learn new things and i am very curious . I want to improve myself in this
                  technologies .Also , i can use Photoshop 2020 and Adobe Xd
                </Text>

                <Text fontSize="xl" mt="20px">
                  I want to move MERN Stack technologies and MEVN Stack technologies . I'm trying to
                  imporve myself everyday in these technologies. Also, I'm a hardworking person and
                  teamwork player.I'm very open minded for new ideas and new techologies.
                </Text>
                <Button colorScheme="blue" mt="10px">
                  <a href="/cv/MertcanKaramanCV.pdf" download>
                    Resume
                  </a>
                </Button>
              </Box>
            </Fade>

            <Fade right>
              <Flex
                w="100%"
                pt="150px"
                height="100%"
                display={{ base: 'none', md: 'inline-block' }}>
                <Flex align="center" justify="center">
                  <Image src={`/images/mert.jpg`} height={500} width={400} />
                </Flex>
              </Flex>
            </Fade>
          </SimpleGrid>
        </Box>

        <Flex w="100%" h="20px" p="30px" mt="20px" justify="center" align="center">
          <Text fontSize={['xl', '3xl', '6xl']} fontWeight="bold">
            About
          </Text>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row  ' }} mt="100px" pb="100px">
          <Flex
            direction="column"
            h="auto"
            w={{ base: '100%', md: '40%' }}
            bg="#282B31"
            borderLeftRadius={{ base: '0', md: '10px' }}
            align="center"
            justify="center">
            <Box mt="20px" align="center">
              <Image
                borderRadius="full"
                boxSize="130px"
                src="/images/mert.jpg"
                alt="Mertcan Karaman"
              />

              <Text color="white" fontSize="lg" fontWeight="bold" mt="10px">
                Mertcan Karaman
              </Text>

              <Text color="gray.400" fontSize="lg" fontWeight="bold" mt="10px">
                21 years old
              </Text>

              <Text color="white" fontSize="lg" fontWeight="bold" mt="10px">
                Developer Engineer
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
                    <a
                      href="https://www.linkedin.com/in/mertcan-karaman-398769169/"
                      target="_blank">
                      <FaLinkedin size={50} color="blue" />
                    </a>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Box h={{ base: '0', md: 'auto' }} w="50px" bg="red.400"></Box>
          <Flex h="auto" w="100%" boxShadow="2xl" borderRightRadius={{ base: '0', md: '10px' }}>
            <Box px="80px" py="50px">
              <Text fontSize="xl" mt="10px">
                Hello, my name is Mertcan. I'm bachelor student in Kadir Has University. My
                department is Computer Engineering .I'm in 2nd grade . My Gpa is 3.14 . I'm very
                passionate about web development. I know HTML5, CSS , JS , Bootstrap,React JS , Node
                JS, Mongo DB , Express .I’m interested in these technologies.
              </Text>

              <Text fontSize="xl" mt="20px">
                I love learn new things and i am very curious . I want to improve myself in this
                technologies .Also , i can use Photoshop 2020 and Adobe Xd
              </Text>

              <Text fontSize="xl" mt="20px">
                I want to move MERN Stack technologies and MEVN Stack technologies . I'm trying to
                imporve myself everyday in these technologies. Also, I'm a hardworking person and
                teamwork player.I'm very open minded for new ideas and new techologies.
              </Text>
              <Flex mt="30px" justify="space-between">
                <Text>4 july 2021</Text>
                <Button colorScheme="blue" mt="10px">
                  <a href="/cv/MertcanKaramanCV.pdf" download>
                    Resume
                  </a>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
      <Box w="100%" height="auto" bg="gray.200" pb="100px">
        <Container maxW="container.xl">
          <Flex align="center" direction="column">
            <Text mt="80px" fontSize="3xl" fontWeight="bold">
              Skills
            </Text>

            <Flex
              w="75%"
              height="auto"
              bg="#FBFBFB"
              direction="column"
              align="center"
              boxShadow="2xl"
              borderTopLeftRadius="15px"
              borderTopRightRadius="15px">
              <Box
                bg="#F14E6A"
                w="100%"
                h="10px"
                borderTopLeftRadius="15px"
                borderTopRightRadius="15px"></Box>

              <SimpleGrid columns={[2, null, 6]} spacing="90px" p="30px">
                <Box h="auto" w="80px" _hover={{ transform: 'scale(1.2)' }}>
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">HTML5</Text>
                    <Image src="/images/html.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">CSS</Text>
                    <Image src="/images/css.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Chakra UI</Text>
                    <Image src="/images/chakraui.svg" mt="30px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Materialize </Text>
                    <Image src="/images/materialize.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Material </Text>
                    <Image src="/images/material-ui.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Tailwind </Text>
                    <Image src="/images/tailwind.svg" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Javascript</Text>
                    <Image src="/images/javascript.png" boxSize="70px" />
                  </Flex>
                </Box>

                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">React</Text>
                    <Image src="/images/react.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Next.js</Text>
                    <Image src="/images/next.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Redux</Text>
                    <Image src="/images/redux.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Node.js</Text>
                    <Image src="/images/nodejs.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Express</Text>
                    <Image src="/images/express.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">MongoDb</Text>
                    <Image src="/images/mongodb.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Firebase</Text>
                    <Image src="/images/firebase.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Sanity</Text>
                    <Image src="/images/sanity.png" boxSize="70px" />
                  </Flex>
                </Box>
                <Box h="auto" w="80px">
                  <Flex direction="column" align="center">
                    <Text fontWeight="bold">Strapi</Text>
                    <Image src="/images/strapi.png" boxSize="70px" objectFit="contain" />
                  </Flex>
                </Box>
              </SimpleGrid>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}

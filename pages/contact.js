import { useState } from 'react';
import Layout from '../components/Layout';
import Fade from 'react-reveal/Fade';
import {
  Flex,
  Container,
  Input,
  Box,
  Text,
  SimpleGrid,
  Image,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react';
import { useFormik } from 'formik';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 1));
    }
  });

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
                ml={{ base: '0', md: '30px' }}
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
                  <Image src={`/images/videoconference.svg`} height={500} width={400} />
                </Flex>
              </Flex>
            </Fade>
          </SimpleGrid>
        </Box>
        <Box w="100%" h="200px"></Box>

        <Text textAlign="center" fontSize="5xl" fontWeight="900">
          Contact Form
        </Text>

        <Box w="300px" h="auto" mx="auto">
          <Text textAlign="center" fontSize="xl" fontWeight="200">
            If my introduction of skill and character has convinced you, I would be happy to hear
            from you for an interview and a possible job offer.
          </Text>
        </Box>
      </Container>
      <Container maxW="container.lg">
        <Box w="100%" h="500px" pt="30px" borderBottom="1px">
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <Box w="100%" h="200px">
              <form onSubmit={formik.handleSubmit}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </FormControl>
                <FormControl mt={6} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
              </form>
            </Box>
            <Box w="100%" h="auto">
              <form onSubmit={formik.handleSubmit}>
                <FormControl>
                  <FormLabel>Message </FormLabel>

                  <Textarea
                    required
                    placeholder="Message"
                    h="100%"
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  />
                </FormControl>
                <Box pt="20px">
                  <Button type="submit" w="100%" colorScheme="blue">
                    Send
                  </Button>
                </Box>
              </form>
            </Box>
          </SimpleGrid>
          <Box w="100%"></Box>
        </Box>
        <Box w="100%" h="200px"></Box>
      </Container>
    </Layout>
  );
}

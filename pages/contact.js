import Layout from '../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  FormLabel
} from '@chakra-ui/react';
import { useFormik } from 'formik';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async values => {
      try {
        if (values.email === '' || values.message === '' || values.name === '') {
          toast.error('You have to fill the empty fields');
        } else {
          await fetch('https://desolate-fjord-88907.herokuapp.com/send', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({ values })
          })
            .then(res => res.json())
            .then(async res => {
              const resData = await res;

              if (resData.status !== 'success') {
                toast.error('Something went wrong!!!');
              } else {
                toast.success('Mail Sent Successfully');
              }
            });
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  });

  return (
    <Layout title="Contact || Mertcankaraman.com">
      <Container maxW="container.xl">
        <Box h="auto" w="100%" borderBottom="2px" py="5rem">
          <ToastContainer />
          <SimpleGrid columns={[1, null, 2]} spacing="40px">
            <Fade left>
              <Box
                w="100%"
                h="auto"
                mt="25%"
                ml={{ base: '0', md: '30px' }}
                textAlign={{ base: 'center', md: 'left', lg: 'left' }}>
                <Text fontSize="6xl" fontWeight="700">
                  Contact
                </Text>

                <Text fontSize="xl" fontWeight="200" pt="50px">
                  I am always waiting for a message from you. I would be happy to hear from you for
                  an interview and a possible job offer. Or you can just talk to me. Don't hesitate
                  to contact me.
                </Text>
              </Box>
            </Fade>

            <Fade right>
              <Flex w="100%" pt="90px" height="100%" display={{ base: 'none', md: 'inline-block' }}>
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

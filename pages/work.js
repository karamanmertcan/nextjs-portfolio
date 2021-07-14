import { Box, Container, Text, Flex, Image, Button, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import TodaysDate from '../components/TodaysDate';
import WorkItem from '../components/WorkItem';
import { TODAY_DATE, REACT_SVG } from '../config/SOCIAL_MEDIA';
import sanityClient from '../client.js';
import Fade from 'react-reveal/Fade';

export default function Work({ data }) {
  const { url } = data[0].mainImage.asset;
  console.log(url);

  const pageTitle = 'Work';

  const { title, excerpt, date, hex, target } = data[0];

  return (
    <Layout title="Work || Mertcankaraman.com">
      <Container maxW="container.xl">
        <Fade>
          <Landing image={REACT_SVG} />
          <TodaysDate title={pageTitle} todayDate={TODAY_DATE} />
          <Box w="100%" h="auto">
            <Flex justify="center" align="center" direction="column">
              <Text fontSize="6xl" fontWeight="bold">
                Work
              </Text>
            </Flex>
          </Box>
        </Fade>

        <Box w="100%" h="auto" borderBottom="2px" pb="50px" mb="50px">
          <Flex direction={{ base: 'column', md: 'row  ' }} mt="100px">
            <Flex
              h="auto"
              w="100%"
              bgGradient={`linear(to-r,${hex})`}
              borderLeftRadius={{ base: '0', md: '20px' }}>
              <Box mx="auto" my="auto">
                <Image src={url + '?h=200&w=200'} alt="" boxSize="320px" objectFit="contain" />
              </Box>
            </Flex>
            <Flex h="auto" w="100%" bg="gray.200" borderRightRadius={{ base: '0', md: '20px' }}>
              <Box p="50px">
                <Text color="black" fontSize="3xl" fontWeight="bold">
                  {title}
                </Text>
                <Text color="black" fontSize="lg" fontWeight="200" mt="20px">
                  {excerpt}
                </Text>
                <Flex mt="30px" justify="space-between" color="black">
                  <Text>{date}</Text>
                  <Link href={target}>
                    <Button colorScheme="blue">See Live</Button>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Flex>

          <SimpleGrid columns={[1, 2, 3]} spacing="40px" mt="50px">
            {data.map((item, index) => {
              const { title, excerpt, mainImage, date, hex, target } = item;
              return (
                <WorkItem
                  hex={hex}
                  target={target}
                  title={title}
                  excerpt={excerpt}
                  mainImage={mainImage}
                  key={index}
                  date={date}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await sanityClient.fetch(`*[_type == "post"]{
    title,
    excerpt,
    date,
    target,
    hex,
    mainImage{
      asset->{
        id,
        url
      },
      alt
    }
  }`);

  return {
    props: {
      data
    }
  };
}

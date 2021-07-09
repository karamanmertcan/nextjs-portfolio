import { Box, Container, Text, Flex, Image, Button, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import TodaysDate from '../components/TodaysDate';
import WorkItem from '../components/WorkItem';
import { TODAY_DATE, REACT_SVG } from '../config/SOCIAL_MEDIA';
import sanityClient from '../client.js';

export default function Work({ data }) {
  const { url } = data[0].mainImage.asset;
  const pageTitle = 'Work';

  const { title, excerpt, date } = data[0];
  console.log(data);

  const newDataWithoutFirstItem = data.slice(1, data.length - 1);

  console.log(newDataWithoutFirstItem);

  return (
    <Layout>
      <Container maxW="container.xl">
        <Landing image={REACT_SVG} />
        <TodaysDate title={pageTitle} todayDate={TODAY_DATE} />
        <Box w="100%" h="auto">
          <Flex justify="center" align="center" direction="column">
            <Text fontSize="6xl" fontWeight="bold">
              Work
            </Text>
          </Flex>
        </Box>

        <Box w="100%" h="auto" borderBottom="2px" pb="50px" mb="50px">
          <Flex direction={{ base: 'column', md: 'row  ' }} mt="100px">
            <Flex
              h="300px"
              w="100%"
              bgGradient="linear(to-r, #3a7bd5, #3a6073)"
              borderLeftRadius="20px">
              <Box mx="auto" my="auto">
                <Image src={url} alt="" boxSize="320px" objectFit="contain" />
              </Box>
            </Flex>
            <Flex h="300px" w="100%" bg="gray.200" borderRightRadius="20px">
              <Box p="50px">
                <Text color="black" fontSize="3xl" fontWeight="bold">
                  {title}
                </Text>
                <Text color="black" fontSize="lg" fontWeight="200" mt="20px">
                  {excerpt}
                </Text>
                <Flex mt="30px" justify="space-between">
                  <Text>{date}</Text>
                  <Button colorScheme="blue">See Live</Button>
                </Flex>
              </Box>
            </Flex>
          </Flex>

          <SimpleGrid columns={[1, null, 3]} spacing="40px" mt="50px">
            {data.map((item, index) => {
              const { title, excerpt, mainImage, date } = item;
              return (
                <WorkItem
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

export async function getServerSideProps() {
  const data = await sanityClient.fetch(`*[_type == "post"]{
    title,
    excerpt,
    date,
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

import { Container, Box } from '@chakra-ui/react';
import TodaysDate from '../components/TodaysDate';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { TODAY_DATE, MY_IMAGE } from '../config/SOCIAL_MEDIA';
export default function Home() {
  const title = 'Home';

  return (
    <Layout>
      <Container maxW="container.xl">
        <Landing image={MY_IMAGE} />
        <TodaysDate todayDate={TODAY_DATE} title={title} />
        <Section />
      </Container>
      <Box W="100%" h="100px" boxShadow="xl"></Box>
    </Layout>
  );
}

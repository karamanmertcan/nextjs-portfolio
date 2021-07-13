import Layout from '../components/Layout';
import { Flex, Text } from '@chakra-ui/react';

export default function NotFoundPage() {
  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" height="100vh">
        <Text fontSize={['xl', '3xl', '6xl']}>Whooopssss!!!</Text>
        <Text fontSize={['xl', '3xl', '6xl']}>Page is not found 404</Text>
      </Flex>
    </Layout>
  );
}

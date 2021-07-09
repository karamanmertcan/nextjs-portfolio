import { useState, useEffect } from 'react';
import { Flex, Box, Text, Spacer } from '@chakra-ui/react';

export default function TodaysDate({ todayDate, title }) {
  return (
    <Box w="100%" h="auto">
      <Flex>
        <Text>{title}</Text>
        <Spacer></Spacer>
        <Text>{todayDate}</Text>
      </Flex>
    </Box>
  );
}

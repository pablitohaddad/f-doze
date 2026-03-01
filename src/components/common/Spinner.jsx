import React from 'react';
import { Center, Loader } from '@mantine/core';

export default function Spinner() {
  return (
    <Center my="md">
      <Loader size="sm" />
    </Center>
  );
}

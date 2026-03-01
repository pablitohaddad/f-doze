import React from 'react';
import { TextInput } from '@mantine/core';

export default function Input({ className = '', ...props }) {
  return (
    <TextInput
      radius="md"
      className={className}
      {...props}
    />
  );
}

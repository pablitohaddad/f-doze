import React from 'react';
import { TextInput } from '@mantine/core';

export default function Input({ className = '', ...props }) {
  return (
    <TextInput
      radius={0}
      className={className}
      styles={{
        input: {
          backgroundColor: '#fff',
          borderColor: '#000',
          color: '#111827'
        }
      }}
      {...props}
    />
  );
}

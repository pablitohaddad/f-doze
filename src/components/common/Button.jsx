import React from 'react';
import { Button as MantineButton } from '@mantine/core';

export default function Button({ children, className = '', ...props }) {
  return (
    <MantineButton
      radius="md"
      className={className}
      {...props}
    >
      {children}
    </MantineButton>
  );
}

import React from 'react';
import { Button as MantineButton } from '@mantine/core';

export default function Button({ children, className = '', ...props }) {
  return (
    <MantineButton
      radius={0}
      size="md"
      className={`!h-auto !border-2 !border-black !bg-black !px-5 !py-3 !font-black !uppercase !tracking-wider !text-white shadow-[4px_4px_0px_0px_#60A5FA] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${className}`}
      {...props}
    >
      {children}
    </MantineButton>
  );
}

import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { body } from '@/source/styles/layouts';

export default function AuthorizedLayout({ children }: { children: ReactNode }) {
  return <Stack padding={body.padding.h}>{children}</Stack>;
}

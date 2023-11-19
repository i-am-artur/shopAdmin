'use client';
import { Button, ButtonProps } from '@mui/material';
import { useDictionary } from 'packages/shared/components/Translation/useDictionary';
import dict from './dictionary';

export default function Save({ children, ...rest }: ButtonProps) {
  const t = useDictionary(dict);

  return (
    <Button variant={rest?.variant ?? 'contained'} {...rest}>
      {children ?? t['label']}
    </Button>
  );
}

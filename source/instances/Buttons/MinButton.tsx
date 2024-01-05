'use client';
import { Button, ButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function MinButton({
  children,
  ...rest
}: { children: React.ReactNode | React.ReactNode[] } & ButtonProps) {
  return (
    <Button variant='contained' sx={{ minWidth: 'initial' }} {...rest}>
      {children}
    </Button>
  );
}

'use client';
import { Button, ButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faReply } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Add(rest: ButtonProps) {
  return (
    <Button variant='contained' startIcon={<FontAwesomeIcon icon={faPlusCircle} />} {...rest}>
      Add
    </Button>
  );
}

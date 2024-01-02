'use client';
import { Button, ButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Filter(props: ButtonProps) {
  return (
    <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faFilter} />} {...props}>
      Filter
    </Button>
  );
}

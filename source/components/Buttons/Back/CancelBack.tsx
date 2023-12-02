'use client';
import { Button, ButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function CancelBack(rest: ButtonProps) {
  const router = useRouter();

  function goToPreviousPage() {
    router.back();
  }

  return (
    <Button
      variant='contained'
      color='error'
      sx={{ minWidth: 'initial' }}
      onClick={rest?.onClick ?? goToPreviousPage}
      {...rest}
    >
      <FontAwesomeIcon icon={faReply} size='lg' />
    </Button>
  );
}

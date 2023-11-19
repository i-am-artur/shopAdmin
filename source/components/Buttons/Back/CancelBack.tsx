'use client';
import { Button, ButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function CancelBack({ children, ...rest }: ButtonProps) {
  const router = useRouter();

  function goToPreviousPage() {
    router.back();
  }

  return (
    <Button
      variant={rest?.variant ?? 'contained'}
      color={rest?.color ?? 'error'}
      sx={{
        '&': { minWidth: 'initial' }
      }}
      onClick={rest?.onClick ?? goToPreviousPage}
      {...rest}
    >
      {children ?? <FontAwesomeIcon icon={faReply} fontSize={20} />}
    </Button>
  );
}

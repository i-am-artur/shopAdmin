'use client';
import { Button, ButtonProps } from '@mui/material';
import { useDictionary } from 'packages/shared/components/Translation/useDictionary';
import dict from './dictionary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteIcon } from 'packages/shared/components/Icons/Icons';

export default function Delete({ children, ...rest }: ButtonProps) {
  const t = useDictionary(dict);

  return (
    <Button
      variant={rest?.variant ?? 'contained'}
      color={rest?.color ?? 'error'}
      startIcon={rest?.startIcon ?? <FontAwesomeIcon icon={deleteIcon} />}
      {...rest}
    >
      {children ?? t['remove']}
    </Button>
  );
}

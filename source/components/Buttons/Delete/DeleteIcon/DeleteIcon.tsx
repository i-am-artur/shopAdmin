'use client';
import { IconButton, IconButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteIcon } from 'packages/shared/components/Icons/Icons';
import { useDictionary } from 'packages/shared/components/Translation/useDictionary';
import dict from 'packages/shared/components/Buttons/Delete/dictionary';

export default function DeleteIcon({ children, size, color, ...rest }: IconButtonProps) {
  const t = useDictionary(dict);

  return (
    <IconButton
      color={color ?? 'primary'}
      sx={{ padding: '0px !important', ...rest?.sx }}
      {...rest}
      title={t['remove']}
      aria-label={t['remove']}
    >
      {children ?? <FontAwesomeIcon icon={deleteIcon} />}
    </IconButton>
  );
}

'use client';
import { Button, ButtonProps } from '@mui/material';
import { useDictionary } from 'packages/shared/components/Translation/useDictionary';
import dict from './dictionary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Filter({ variant, color, children, ...rest }: ButtonProps) {
  const t = useDictionary(dict);
  const variant1 = variant ? variant : 'contained';
  const color1 = color ? color : 'secondary';

  return (
    <Button variant={variant1} color={color1} startIcon={<FontAwesomeIcon icon={faFilter} />} {...rest}>
      {t['filter']}
    </Button>
  );
}

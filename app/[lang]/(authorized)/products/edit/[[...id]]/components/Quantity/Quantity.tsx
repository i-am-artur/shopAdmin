'use client';
import { Stack } from '@mui/material';
import { box } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Quantity() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='Quantity'>
      <FontAwesomeIcon icon={faInfoCircle} />
    </Stack>
  );
}

'use client';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';

export default function General() {
  return (
    <Stack component='section' aria-label='General'>
      <FormControlLabel
        control={<Checkbox aria-label='Active for this language' />}
        label='Active for this language'
      />
    </Stack>
  );
}

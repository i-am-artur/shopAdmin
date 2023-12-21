'use client';
import { Autocomplete, FormControlLabel, Stack, TextField } from '@mui/material';
import { box } from '@/source/styles/layouts';
import Checkbox from '@/source/common/Form/Checkbox/Checkbox';

export default function General() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='General'>
      <FormControlLabel
        control={<Checkbox variant='unit' aria-label='Active for this language' />}
        label='Active for this language'
      />

      <TextField label='Name (EN)' />

      <Autocomplete
        options={['cat1', '(ru) cat2']}
        renderInput={(params) => <TextField {...params} label='Category' />}
      />

      <TextField label='Description (EN)' rows={6} multiline />
    </Stack>
  );
}

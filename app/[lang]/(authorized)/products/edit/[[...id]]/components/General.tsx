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
        multiple
        options={['cat1', '(ru) cat2']}
        renderInput={(params) => <TextField {...params} label='Category' />}
      />

      <TextField label='Short description (EN)' rows={3} multiline />
      <TextField label='Description (EN)' rows={8} multiline />

      {/*  TODO: Move to locations/quantity */}
      <FormControlLabel
        control={<Checkbox variant='unit' aria-label='Sell only from online location' />}
        label='Sell only from online location'
      />

      <Autocomplete
        multiple
        options={['Nike', 'Sony']}
        renderInput={(params) => <TextField {...params} label='Brands' />}
      />

      <Autocomplete
        multiple
        options={['sony 345', 'samsung s10e']}
        renderInput={(params) => <TextField {...params} label='Related products' />}
      />

      <Autocomplete
        multiple
        options={['Nova Pochta']}
        renderInput={(params) => <TextField {...params} label='Shipment' />}
      />

      <Autocomplete
        multiple
        options={['EU']}
        renderInput={(params) => <TextField {...params} label='Forbidden to sell in zones' />}
      />

      <Autocomplete
        multiple
        options={['EU']}
        renderInput={(params) => <TextField {...params} label='Taxes' />}
      />
    </Stack>
  );
}

'use client';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Filter from '@/source/components/Buttons/Filter/Filter';

export default function Attributes() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='Attributes'>
      <Stack direction='row' columnGap={unit.gap.h}>
        <FormControl fullWidth>
          <InputLabel id='label'>Attributes</InputLabel>
          <Select labelId='label' id='type' value='percent' label='Attributes'>
            <MenuItem value='percent'>Regular</MenuItem>
            <MenuItem value='price'>Cellphones</MenuItem>
          </Select>
        </FormControl>

        <Button variant='contained' color='secondary'>
          <FontAwesomeIcon icon={faPlus} size='2xl' />
        </Button>
      </Stack>

      <Stack direction='row' justifyContent='space-between' columnGap={unit.gap.h}>
        <TextField placeholder='Search' label='Search' fullWidth />
        <Filter />
      </Stack>
    </Stack>
  );
}

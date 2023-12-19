'use client';
import { Box, Button, FormControl, MenuItem, Select, Stack, TextField } from '@mui/material';
import { unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fieldset } from '@/source/common/Form/Fieldset/Fieldset';
import { sbDelete } from '../../../../../../../../../source/common/Icons/SbIcons';

export default function Discount() {
  return (
    <Fieldset $variant='outlined' $sx={{ flexWrap: 'wrap' }}>
      <Stack direction='row' columnGap={unit.gap.h} alignItems='flex-end' sx={{ flex: '1 0 auto' }}>
        <TextField fullWidth label='Amount' variant='standard' inputProps={{ style: { textAlign: 'end' } }} />

        <FormControl fullWidth>
          {/*<InputLabel id='label'>Type</InputLabel>*/}
          <Select labelId='label' id='type' value='percent' label='Type' variant='standard'>
            <MenuItem value='percent'> %</MenuItem>
            <MenuItem value='price'>UAH</MenuItem>
            {/*<MenuItem value='price'>Amount (UAH)</MenuItem>*/}
          </Select>
        </FormControl>
      </Stack>
      <Stack direction='row' columnGap={unit.gap.h} sx={{ flex: '1 1 auto' }}>
        <TextField sx={{ flex: '1 1 auto' }} label='Date start' variant='standard' />
        <TextField sx={{ flex: '1 1 auto' }} label='Date end' variant='standard' />
      </Stack>
      <Stack direction='row' columnGap={unit.gap.h} sx={{ flex: '1 0 auto' }}>
        <TextField
          fullWidth
          label='Quantity to be sold'
          placeholder='Leave blank if unlimited'
          variant='standard'
          inputProps={{ style: { textAlign: 'end' } }}
        />
      </Stack>
      <Box sx={{ color: 'red' }}>Final price: 2000 uah</Box>
      <Button fullWidth color='primary' variant='contained' startIcon={<FontAwesomeIcon icon={sbDelete} />}>
        Delete
      </Button>
    </Fieldset>
  );
}

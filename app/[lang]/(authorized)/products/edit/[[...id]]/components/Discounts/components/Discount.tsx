'use client';
import { Button, FormControl, MenuItem, Select, Stack, TextField } from '@mui/material';
import { item, unit } from '@/source/styles/layouts';
import { primary } from '../../../../../../../../../source/styles/colors';
import { radius } from '../../../../../../../../../source/styles/borders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Discount() {
  return (
    <Stack
      direction='row'
      component='fieldset'
      rowGap={item.gap.v}
      columnGap={unit.gap.h}
      arial-label='Discount'
      padding={1.5 * unit.gap.h}
      sx={{ flexWrap: 'wrap', border: `1px solid ${primary.main}`, borderRadius: radius.general + 'px' }}
    >
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
          placeholder='Unlimited: blank'
          variant='standard'
          inputProps={{ style: { textAlign: 'end' } }}
        />
      </Stack>
      Final price: 2000 uah
      <Button fullWidth color='primary' variant='contained' startIcon={<FontAwesomeIcon icon={faTrash} />}>
        Delete
      </Button>
    </Stack>
  );
}

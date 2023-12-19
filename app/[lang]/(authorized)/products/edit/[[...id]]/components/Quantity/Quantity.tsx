'use client';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { box } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { secondary } from '@/source/styles/colors';

export default function Quantity() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='Quantity'>
      <Box color={secondary.text}>
        <FontAwesomeIcon icon={faInfoCircle} /> By default all quantity is unlimited
      </Box>
      <TextField label='Quantity' placeholder='Leave blank if unlimited' />

      <TextField label='Minimum order' defaultValue={1} placeholder='By default 1 unit' />

      <FormControl fullWidth>
        <InputLabel id='outOfStockMessage' size='small'>
          Out of stock message
        </InputLabel>
        <Select
          labelId='outOfStockMessage'
          id='outOfStockMessageId'
          value='outOfStock'
          label='Out of stock message'
        >
          <MenuItem value='outOfStock'>Out of stock</MenuItem>
          <MenuItem value='111'>1111</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id='inStockMessage' size='small'>
          In stock message
        </InputLabel>
        <Select labelId='inStockMessage' id='inStockMessageId' value='outOfStock' label='In stock message'>
          <MenuItem value='outOfStock'>In stock</MenuItem>
          <MenuItem value='111'>1111</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label='Date available'
        placeholder='Leave blank if available'
        helperText='Start selling on this day'
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Stack>
  );
}

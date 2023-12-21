'use client';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { secondary } from '@/source/styles/colors';
import Features from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Options/Features/Features';
import Selects from './Selects/Selects';
import Text from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Options/Text/Text';
import DateOption from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Options/Date/Date';

export default function Options() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='Options'>
      <Stack direction='row' columnGap={unit.gap.h}>
        <FormControl fullWidth>
          <InputLabel id='addOption' size='small'>
            Add option
          </InputLabel>
          <Select labelId='addOption' id='addOptionId' value='Select' label='Add option'>
            <MenuItem value='Select'>Select</MenuItem>
            <MenuItem value='Feature'>Feature</MenuItem>
            <MenuItem value='Text'>Text</MenuItem>
            <MenuItem value='Date'>Date</MenuItem>
            <MenuItem value='DateTime'>Date & Time</MenuItem>
          </Select>
        </FormControl>
        <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faInfoCircle} color={secondary.text} />
        <Button color='secondary' variant='contained'>
          <FontAwesomeIcon icon={faPlus} size='2x' />
        </Button>
      </Stack>
      <Features />
      <Selects />
      <Text />
      <DateOption />
      date and time
    </Stack>
  );
}

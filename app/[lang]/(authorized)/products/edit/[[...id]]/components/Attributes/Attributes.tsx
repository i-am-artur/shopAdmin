'use client';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { box, item, unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Attribute from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Attributes/components/Attribute';
import Search from '@/source/common/Form/Textfield/Search/Search';
import Filter from '@/source/common/Buttons/Filter/Filter';

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
        <Search />
        <Filter />
      </Stack>

      <Stack component='ul' rowGap={item.gap.v}>
        <li>
          <Attribute />
        </li>
        <li>
          <Attribute />
        </li>
      </Stack>
    </Stack>
  );
}

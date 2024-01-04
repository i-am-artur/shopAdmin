'use client';
import Add from '@/source/components/Buttons/Add/Add';
import Filter from '@/source/components/Buttons/Filter/Filter';
import { PageHeading } from '@/source/components/Typography/Headings';
import { route } from '@/source/routes/routes';
import { box, unit } from '@/source/styles/layouts';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import Brands from './components/Brands';

export default function BrandsPage() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Brands</PageHeading>
        <Add component={Link} href={route.brands.edit.path} />
      </Stack>

      <Stack direction='row' justifyContent='space-between' columnGap={unit.gap.h}>
        <TextField placeholder='Search' label='Search' />
        <Filter />
      </Stack>

      <Stack direction='row' alignItems='center'>
        <Box sx={{ transform: 'rotate(-90deg)', padding: 14 }}>
          <FontAwesomeIcon icon={faArrowTurnDown} />
        </Box>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label' size='small'>
            Action
          </InputLabel>
          <Select labelId='demo-simple-select-label' id='demo-simple-select' value={null} label='Action'>
            <MenuItem value={10}>Delete</MenuItem>
            <MenuItem value={20}>Set parent category</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Brands />
    </Stack>
  );
}

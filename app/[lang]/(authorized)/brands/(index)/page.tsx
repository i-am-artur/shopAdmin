'use client';
import { PageHeading } from '@/source/components/Typography/Headings';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import Cats from '@/app/[lang]/(authorized)/cats/(index)/components/Cats';
import Add from '@/source/components/Buttons/Add/Add';
import Filter from '@/source/components/Buttons/Filter/Filter';
import Link from 'next/link';
import { urls } from '@/source/routes/routes';
import { ElementType } from 'react';

export default function BrandsPage() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Categories</PageHeading>
        <Add component={Link as ElementType} href={urls.categories.edit.path} />
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
          <Select labelId='demo-simple-select-label' id='demo-simple-select' value='' label='Action'>
            <MenuItem value={10}>Delete</MenuItem>
            <MenuItem value={20}>Set parent category</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Cats />
    </Stack>
  );
}

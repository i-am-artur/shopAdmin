'use client';
import { PageHeading } from '@/source/components/typography/Headings';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import Add from '@/source/components/Buttons/Add/Add';
import Filter from '@/source/components/Buttons/Filter/Filter';
import ProductList from '@/app/[lang]/(authorized)/products/(index)/components/ProductList';
import { urls } from '@/source/routes/routes';
import Link from 'next/link';
import Search from '../../../../../source/components/Form/Textfield/Search/Search';

export default function Products() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Products</PageHeading>
        <Add component={Link as any} href={urls.products.edit.path} />
      </Stack>

      <Stack direction='row' justifyContent='space-between' columnGap={unit.gap.h}>
        <Search />
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
          </Select>
        </FormControl>
      </Stack>

      <ProductList />
    </Stack>
  );
}

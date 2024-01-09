'use client';
import Add from '@/source/instances/Buttons/Add/Add';
import Filter from '@/source/instances/Buttons/Filter/Filter';
import { PageHeading } from '@/source/instances/Typography/Headings';
import { route } from '@/source/routes/routes';
import { box, unit } from '@/source/styles/layouts';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import AttributeGroups from './components/OptionGroups';
import OptionGroups from './components/OptionGroups';

export default function OptionGroupsPage() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Option groups</PageHeading>
      </Stack>

      <Stack direction='row' columnGap={unit.gap.h}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label' size='small'>
            Option to add
          </InputLabel>
          <Select
            label='Option to add'
            value={''}
            placeholder='Option to add'
            labelId='demo-simple-select-label'
          >
            <MenuItem value={10}>Select</MenuItem>
            <MenuItem value={20}>Feature</MenuItem>
          </Select>
        </FormControl>
        <Add component={Link} href={route.optionGroups.edit.path} />
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
          <Select
            label='Action'
            value={''}
            placeholder='Action'
            labelId='demo-simple-select-label'
            onChange={(e) => alert(e.target.value)}
          >
            <MenuItem value={10}>Delete</MenuItem>
            <MenuItem value={20}>Set parent category</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <OptionGroups />
    </Stack>
  );
}

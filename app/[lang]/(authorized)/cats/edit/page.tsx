'use client';
import { PageHeading } from '@/source/components/typography/Headings';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown, faFilter, faPlusCircle, faReply } from '@fortawesome/free-solid-svg-icons';
import Cats from '@/app/[lang]/(authorized)/cats/(index)/components/Cats';

export default function EditCats() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Category</PageHeading>
        <Box sx={{ flexDirection: 'row', columnGap: unit.gap.h }}>
          <Button variant='contained'>Save</Button>
          <IconButton color='error' variant='contained'>
            <FontAwesomeIcon icon={faReply} />
          </IconButton>
        </Box>
      </Stack>

      <Stack direction='row' justifyContent='space-between' columnGap={unit.gap.h}>
        <TextField placeholder='Search' label='Search' />
        <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faFilter} />}>
          Filter
        </Button>
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

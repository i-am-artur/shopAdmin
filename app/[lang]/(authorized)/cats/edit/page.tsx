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
import CancelBack from '@/source/components/Buttons/Back/CancelBack';

export default function EditCats() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Category</PageHeading>
        <Box sx={{ display: 'flex', columnGap: unit.gap.h }}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Box>
      </Stack>

      <Stack direction='row' justifyContent='space-between' columnGap={unit.gap.h}>
        <TextField placeholder='Search' label='Search' />
        <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faFilter} />}>
          Filter
        </Button>
      </Stack>
    </Stack>
  );
}

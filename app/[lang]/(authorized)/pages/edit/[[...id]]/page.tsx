'use client';
import CancelBack from '@/source/instances/Buttons/Back/CancelBack';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import UserLanguages from '@/source/instances/Tabs/UserLanguages/UserLanguages';
import { PageHeading } from '@/source/instances/Typography/Headings';
import { box, unit } from '@/source/styles/layouts';
import { Button, FormControlLabel, Stack, TextField } from '@mui/material';

export default function PageEditPage() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Page</PageHeading>
        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      <UserLanguages />

      <FormControlLabel
        control={<Checkbox aria-label='select all products' variant='unit' />}
        label='Enabled'
      />

      <TextField placeholder='Add page title' label='Title' fullWidth required />
      <TextField placeholder='Add page content' label='Content' fullWidth multiline rows={5} />
    </Stack>
  );
}

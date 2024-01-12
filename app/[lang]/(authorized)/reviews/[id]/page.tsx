'use client';

import CancelBack from '@/source/instances/Buttons/Back/CancelBack';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { PageHeading } from '@/source/instances/Typography/Headings';
import { box, item, unit } from '@/source/styles/layouts';
import { Button, FormControlLabel, Rating, Stack, TextField, Box } from '@mui/material';
import Link from 'next/link';

export default function ReviewPage() {
  return (
    <Stack component='main' rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Review</PageHeading>
        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      <Stack rowGap={unit.gap.v}>
        <FormControlLabel
          control={<Checkbox aria-label='select all products' variant='unit' />}
          label='Mark as unread'
        />

        <FormControlLabel
          control={<Checkbox aria-label='select all products' variant='unit' />}
          label='Enabled'
        />
      </Stack>

      <Stack rowGap={unit.gap.v}>
        <div>Date: 12.03.24</div>
        <div>
          Product: <Link href='/'>Iphone</Link>
        </div>
        <div>Author: Jack Sparrow</div>
        <div>Email: test@gmail.com</div>
        <Stack direction='row' alignItems='center'>
          Rating: <Rating value={2} readOnly />
        </Stack>
      </Stack>

      <div>
        <Box component='span' sx={{ fontWeight: 'bold' }}>
          Comment:
        </Box>{' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </div>
      <TextField label='Reply' multiline rows={4} />

      <FormControlLabel
        control={<Checkbox aria-label='select all products' variant='unit' />}
        label='Send email with reply to customer'
      />
    </Stack>
  );
}

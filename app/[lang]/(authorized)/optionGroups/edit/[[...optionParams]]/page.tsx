'use client';

import CancelBack from '@/source/instances/Buttons/Back/CancelBack';
import UserLanguages from '@/source/instances/Tabs/UserLanguages/UserLanguages';
import { PageHeading } from '@/source/instances/Typography/Headings';
import { box, unit } from '@/source/styles/layouts';
import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';

export default function EditOptionsPage({ params }: { params: { optionParams: string[] } }) {
  const [language, setLanguage] = useState('en');

  return (
    <Stack component='main' rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Select option</PageHeading>

        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      <UserLanguages />
    </Stack>
  );
}

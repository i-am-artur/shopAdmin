'use client';
import { PageHeading } from '@/source/components/Typography/Headings';
import { Button, Stack } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import CancelBack from '@/source/components/Buttons/Back/CancelBack';
import { useState } from 'react';
import { Tab, Tabs } from '@/source/components/Tabs/Tabs';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { error } from '@/source/styles/colors';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function EditBrandPage() {
  const [language, setLanguage] = useState('en');

  return (
    <Stack component='main' rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Brand</PageHeading>
        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      {/* //TODO: make independant language component */}

      <Tabs
        value={language}
        onChange={(event, value) => setLanguage(value)}
        $upperCase
        aria-label='languages'
      >
        <Tab
          label={
            <Stack direction='row' columnGap={4} alignItems='center'>
              en <FontAwesomeIcon icon={faExclamationCircle} color={error.main} />
            </Stack>
          }
          value='en'
        />
        <Tab label='ru' value='ru' />
      </Tabs>
    </Stack>
  );
}

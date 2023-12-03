'use client';
import { PageHeading } from '@/source/components/typography/Headings';
import { Button, Stack } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import CancelBack from '@/source/components/Buttons/Back/CancelBack';
import { useState } from 'react';
import { Tab, Tabs } from '@/source/components/Tabs/Tabs';
// import General from '@/app/[lang]/(authorized)/cats/edit/components/General';
// import CatImage from '@/app/[lang]/(authorized)/cats/edit/components/CatImage';
import dynamic from 'next/dynamic';

const General = dynamic(() => import('@/app/[lang]/(authorized)/cats/edit/components/General'));
const CatImage = dynamic(() => import('@/app/[lang]/(authorized)/cats/edit/components/CatImage'));

export default function EditCats() {
  const [language, setLanguage] = useState('en');
  const [section, setSection] = useState('general');

  return (
    <Stack component='main' mt={box.gap.v} rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Category</PageHeading>
        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      <Tabs
        value={language}
        onChange={(event, value) => setLanguage(value)}
        $upperCase
        aria-label='languages'
      >
        <Tab label='en' value='en' />
        <Tab label='ru' value='ru' />
      </Tabs>

      <Tabs value={section} onChange={(event, value) => setSection(value)} $fullWidth aria-label='sections'>
        <Tab label='General' value='general' />
        <Tab label='Image' value='image' />
      </Tabs>

      {section === 'general' && <General />}
      {section === 'image' && <CatImage />}
    </Stack>
  );
}

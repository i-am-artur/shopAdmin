'use client';
import { PageHeading } from '@/source/common/typography/Headings';
import { Button, Stack } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import CancelBack from '@/source/common/Buttons/Back/CancelBack';
import { useState } from 'react';
import { Tab, Tabs } from '@/source/common/Tabs/Tabs';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { error } from '@/source/styles/colors';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const General = dynamic(() => import('@/app/[lang]/(authorized)/cats/edit/components/General'));
const CatImage = dynamic(() => import('@/app/[lang]/(authorized)/cats/edit/components/CatImage'));

export default function EditCats() {
  const [language, setLanguage] = useState('en');
  const [section, setSection] = useState('general');

  return (
    <Stack component='main' rowGap={box.gap.v}>
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

      <Tabs value={section} onChange={(event, value) => setSection(value)} $fullWidth aria-label='sections'>
        <Tab
          label={
            <Stack direction='row' columnGap={4} alignItems='center'>
              General <FontAwesomeIcon icon={faExclamationCircle} color={error.main} />
            </Stack>
          }
          value='general'
        />
        <Tab label='Image' value='image' />
      </Tabs>

      {section === 'general' && <General />}
      {section === 'image' && <CatImage />}
    </Stack>
  );
}

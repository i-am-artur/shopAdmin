'use client';
import { PageHeading } from '@/source/components/Typography/Headings';
import { Button, FormControlLabel, Stack } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import CancelBack from '@/source/components/Buttons/Back/CancelBack';
import { useState } from 'react';
import { Tab, Tabs } from '@/source/components/Tabs/Tabs';
// import General from '@/app/[lang]/(authorized)/cats/edit/components/General';
// import CatImage from '@/app/[lang]/(authorized)/cats/edit/components/CatImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { error } from '@/source/styles/colors';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '@/source/components/Checkbox/Checkbox';
import General from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/General';

export default function ProductEditPage() {
  const [language, setLanguage] = useState('en');
  const [section, setSection] = useState('general');

  return (
    <Stack component='main' rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Product</PageHeading>
        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      <FormControlLabel
        control={<Checkbox variant='unit' aria-label='Product is visible' />}
        label='Product is visible'
      />

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

      <Tabs value={section} onChange={(event, value) => setSection(value)} aria-label='sections'>
        <Tab
          label={
            <Stack direction='row' columnGap={4} alignItems='center'>
              General <FontAwesomeIcon icon={faExclamationCircle} color={error.main} />
            </Stack>
          }
          value='general'
        />
        <Tab label='Price/Properties' value='Price/Properties' />
        <Tab label='Quantity/Variants' value='Quantity/Variants' />
        <Tab label='Images' value='Images' />
        <Tab label='Options' value='Options' />
        <Tab label='Discount' value='Discount' />
        <Tab label='Attributes' value='Attributes' />
        <Tab label='SEO' value='SEO' />
      </Tabs>

      {section === 'general' && <General />}
    </Stack>
  );
}

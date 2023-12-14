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
import Checkbox from '@/source/components/Form/Checkbox/Checkbox';
import General from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/General';
import SEO from './components/SEO';
import Discounts from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Discounts/Discounts';
import Attributes from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Attributes/Attributes';
import Quantity from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Quantity/Quantity';

export default function ProductEditPage() {
  const [language, setLanguage] = useState('en');
  const [section, setSection] = useState('Quantity');

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
          value='General'
        />
        <Tab label='Price/Properties' value='Price/Properties' />
        <Tab label='Images' value='Images' />
        <Tab label='Quantity/Variants' value='Quantity' />
        <Tab label='Attributes' value='Attributes' />
        <Tab label='Options' value='Options' />
        <Tab label='Discounts' value='Discounts' />
        <Tab label='SEO' value='SEO' />
      </Tabs>

      {section === 'General' && <General />}
      {section === 'Attributes' && <Attributes />}
      {section === 'Discounts' && <Discounts />}
      {section === 'SEO' && <SEO />}
      {section === 'Quantity' && <Quantity />}
    </Stack>
  );
}

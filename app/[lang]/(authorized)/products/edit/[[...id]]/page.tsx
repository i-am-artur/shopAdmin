'use client';
import { Button, FormControlLabel, Stack } from '@mui/material';
import { box, sm, unit } from '@/source/styles/layouts';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { error } from '@/source/styles/colors';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import General from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/General';
import SEO from './components/SEO';
import Discounts from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Discounts/Discounts';
import Attributes from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Attributes/Attributes';
import Quantity from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Quantity/Quantity';
import Images from './components/Images/Images';
import { PageHeading } from '@/source/instances/Typography/Headings';
import CancelBack from '@/source/instances/Buttons/Back/CancelBack';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { Tab, Tabs } from '@/source/instances/Tabs/Tabs';
import Options from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Options/Options';
import UserLanguages from '@/source/instances/Tabs/UserLanguages/UserLanguages';
import TabContent from '@/source/instances/Tabs/TabContent';

export default function ProductEditPage() {
  const [language, setLanguage] = useState('en');
  const [section, setSection] = useState('Options');

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

      <UserLanguages languagesWithError={['en']} onChange={setLanguage} />

      <Tabs value={section} onChange={(event, value) => setSection(value)} aria-label='sections'>
        <Tab label={<TabContent name='General' />} value='General' />
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
      {section === 'Images' && <Images />}
      {section === 'Options' && <Options />}
    </Stack>
  );
}

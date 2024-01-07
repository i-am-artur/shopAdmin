'use client';
import { PageHeading, SectionHeading } from '@/source/instances/Typography/Headings';
import { Button, Divider, FormControlLabel, IconButton, Stack, TextField } from '@mui/material';
import { box, unit } from '@/source/styles/layouts';
import CancelBack from '@/source/instances/Buttons/Back/CancelBack';
import { useState } from 'react';
import { Tab, Tabs } from '@/source/instances/Tabs/Tabs';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { error } from '@/source/styles/colors';
import { faExclamationCircle, faImage, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import UserLanguages from '@/source/instances/Tabs/UserLanguages/UserLanguages';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import Image from 'next/image';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';
import MinButton from '@/source/instances/Buttons/MinButton';
import Attributes from './components/Attributes';

export default function EditBrandPage() {
  const [language, setLanguage] = useState('en');

  return (
    <Stack component='main' rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Attributes group name</PageHeading>
        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      <UserLanguages />
      {/* <Divider /> */}

      {/* <FormControlLabel
        control={<Checkbox aria-label='Active for this language' />}
        label='Active for this language'
      /> */}

      <TextField
        placeholder='E.g. Phone or Laptop'
        label='Attribute group name'
        fullWidth
        required
        defaultValue='Phone'
      />

      {/* <Divider /> */}

      <Attributes />
    </Stack>
  );
}

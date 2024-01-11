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
import { faExclamationCircle, faImage } from '@fortawesome/free-solid-svg-icons';
import UserLanguages from '@/source/instances/Tabs/UserLanguages/UserLanguages';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import Image from 'next/image';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';
import MinButton from '@/source/instances/Buttons/MinButton';

export default function EditCodePage() {
  const [language, setLanguage] = useState('en');

  return (
    <Stack component='main' rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Code</PageHeading>
        <Stack direction='row' columnGap={unit.gap.h}>
          <Button variant='contained'>Save</Button>
          <CancelBack />
        </Stack>
      </Stack>

      <TextField
        placeholder='Enter code name in English'
        label='Eng'
        fullWidth
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        placeholder='Enter code name in Russian'
        label='Rus'
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
    </Stack>
  );
}

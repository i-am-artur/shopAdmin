import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs } from '../Tabs';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { userLanguages, userDefaultLanguage } from '../../Translation/languages';
import { error as errorColor } from '@/source/styles/colors';
import { sm } from '@/source/styles/layouts';

export default function TabContent({ name, error = false }: { name: string; error?: boolean }) {
  return (
    <Stack direction='row' columnGap={sm.gap.h} alignItems='center'>
      {name}
      {error && <FontAwesomeIcon icon={faExclamationCircle} color={errorColor.main} />}
    </Stack>
  );
}

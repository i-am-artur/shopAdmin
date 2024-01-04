import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs } from '../Tabs';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { userLanguages, userDefaultLanguage } from '../../Translation/languages';
import { error } from '@/source/styles/colors';

export default function UserLanguages({
  languagesWithError: errors = [],
  onChange
}: {
  languagesWithError?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [language, setLanguage] = useState(userDefaultLanguage);

  return (
    <Tabs
      value={language}
      onChange={(event, value) => {
        setLanguage(value);
        onChange && onChange(value);
      }}
      $upperCase
      aria-label='languages'
    >
      {userLanguages.map((language) => (
        <Tab
          key={language}
          label={
            <Stack direction='row' columnGap={4} alignItems='center'>
              {language}{' '}
              {errors.includes(language) && <FontAwesomeIcon icon={faExclamationCircle} color={error.main} />}
            </Stack>
          }
          value={language}
        />
      ))}
    </Tabs>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs } from '../Tabs';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { userLanguages, userDefaultLanguage } from '../../Translation/languages';
import { error } from '@/source/styles/colors';
import { sm } from '@/source/styles/layouts';
import TabContent from '../TabContent';

export default function UserLanguages({
  languagesWithError: errors = [],
  onChange
}: {
  languagesWithError?: string[];
  onChange?: (language: string) => void;
}) {
  const [language, setLanguage] = useState(userDefaultLanguage);

  useEffect(() => {
    onChange && onChange(language);
  }, []);

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
          label={<TabContent name={language} error={errors.includes(language)} />}
          value={language}
        />
      ))}
    </Tabs>
  );
}

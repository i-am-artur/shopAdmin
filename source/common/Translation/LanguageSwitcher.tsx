import { MenuItem, Select } from '@mui/material';

export default function LanguageSwitcher() {
  return (
    <Select value='en'>
      <MenuItem value='en'>En</MenuItem>
      <MenuItem value='en'>Ru</MenuItem>
    </Select>
  );
}

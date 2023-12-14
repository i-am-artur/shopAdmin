'use client';
import { TextField, TextFieldProps } from '@mui/material';

export default function Search(props: TextFieldProps) {
  return <TextField label='Search' placeholder='Enter search text' sx={{ width: '100%' }} {...props} />;
}

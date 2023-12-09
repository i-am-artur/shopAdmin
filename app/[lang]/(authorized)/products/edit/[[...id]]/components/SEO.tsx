'use client';
import { Stack, TextField } from '@mui/material';
import { box } from '@/source/styles/layouts';

export default function SEO() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='SEO'>
      <TextField label='Meta Tag Description (EN)' rows={3} multiline />
      <TextField label='Meta Tag Keywords (EN)' rows={3} multiline />
      <TextField label='Product Tags (EN)' rows={3} multiline />
    </Stack>
  );
}

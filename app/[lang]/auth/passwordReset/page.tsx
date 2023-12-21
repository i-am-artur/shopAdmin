import { Button, Stack, TextField } from '@mui/material';
import { PageHeading } from '@/source/common/Typography/Headings';
import LanguageSwitcher from '@/source/common/Translation/LanguageSwitcher';
import { Fragment } from 'react';
import { body, box, positionCenter } from '@/source/styles/layouts';

export default function LoginPage() {
  return (
    <Fragment>
      <Stack component='header' direction='row' alignItems='center' justifyContent='space-between'>
        <PageHeading>Password reset</PageHeading>
        <LanguageSwitcher />
      </Stack>
      <Stack component='main'>
        <Stack component='form' padding={body.padding.h} width='100%' rowGap={box.gap.v} sx={positionCenter}>
          <TextField label='New password' required fullWidth />
          <TextField label='Repeat password' required fullWidth />
          <Button variant='contained'>Submit</Button>
        </Stack>
      </Stack>
    </Fragment>
  );
}

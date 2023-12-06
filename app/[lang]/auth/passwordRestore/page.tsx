import { Box, Button, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import { urls } from '@/source/routes/routes';
import { PageHeading } from '@/source/components/Typography/Headings';
import LanguageSwitcher from '@/source/components/Translation/LanguageSwitcher';
import { Fragment } from 'react';
import { body, box, positionCenter } from '@/source/styles/layouts';

export default function LoginPage() {
  return (
    <Fragment>
      <Stack component='header' direction='row' alignItems='center' justifyContent='space-between'>
        <PageHeading>Password restore</PageHeading>
        <LanguageSwitcher />
      </Stack>
      <Stack component='main'>
        <Stack padding={body.padding.h} width='100%' rowGap={box.gap.v} sx={positionCenter}>
          <Box component='form'>
            <Stack component='fieldset' rowGap={box.gap.v}>
              <Box component='legend'>Email with reset link will be sent tou your email</Box>
              <TextField label='Email' required fullWidth sx={{ mt: box.gap.v }} />
              <Button variant='contained'>Submit</Button>
            </Stack>
          </Box>
          <Link href={urls.auth.login.path}>Login</Link>
        </Stack>
      </Stack>
    </Fragment>
  );
}

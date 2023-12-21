import { Box, Button, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import { urls } from '@/source/routes/routes';
import { PageHeading } from '@/source/common/Typography/Headings';
import LanguageSwitcher from '@/source/common/Translation/LanguageSwitcher';
import { Fragment } from 'react';
import { body, box, positionCenter } from '@/source/styles/layouts';

export default function LoginPage() {
  return (
    <Fragment>
      <Stack component='header' direction='row' alignItems='center' justifyContent='space-between'>
        <PageHeading>Admin authentication</PageHeading>
        <LanguageSwitcher />
      </Stack>
      <Stack component='main'>
        <Stack padding={body.padding.h} width='100%' rowGap={box.gap.v} sx={positionCenter}>
          <Box component='form'>
            <Stack component='fieldset' rowGap={box.gap.v}>
              <Box component='legend' sx={{ fontWeight: 'bold' }}>
                Login information
              </Box>
              <TextField label='Email' required fullWidth sx={{ mt: box.gap.v }} />
              <TextField label='Password' required fullWidth />
              <Button variant='contained'>Submit</Button>
            </Stack>
          </Box>
          <Link href={urls.auth.passwordRestore.path}>Forgot password?</Link>
        </Stack>
      </Stack>
    </Fragment>
  );
}

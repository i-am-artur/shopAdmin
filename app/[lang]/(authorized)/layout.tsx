'use client';
import { IconButton, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { body, box, unit } from '@/source/styles/layouts';
import { ReactNode, Fragment } from 'react';

export default function AuthorizedLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Stack
        component='header'
        direction='row'
        padding={body.padding.h}
        justifyContent='space-between'
        color='white'
        mx={-1 * body.padding.h}
        mt={-1 * body.padding.h}
        sx={{ backgroundColor: 'black' }}
      >
        <Stack direction='row' columnGap={unit.gap.h} alignItems='center'>
          <IconButton>
            <FontAwesomeIcon icon={faBars} size='lg' color='white' />
          </IconButton>
          Powered by AKO
        </Stack>
        <IconButton>
          <FontAwesomeIcon icon={faUser} size='lg' color='white' />
        </IconButton>
      </Stack>
      {children}
    </Fragment>
  );
}

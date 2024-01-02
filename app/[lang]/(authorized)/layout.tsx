'use client';
import { Drawer, IconButton, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { body, box, unit } from '@/source/styles/layouts';
import { Fragment, ReactNode, useState } from 'react';
import Navigation from '@/source/components/Navigation/Navigation';

export default function AuthorizedLayout({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

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
        mb={box.gap.v}
        sx={{ backgroundColor: 'black' }}
      >
        <Stack direction='row' columnGap={unit.gap.h} alignItems='center'>
          <IconButton onClick={() => setShowSidebar(true)}>
            <FontAwesomeIcon icon={faBars} size='lg' color='white' />
          </IconButton>
          Powered by AKO
        </Stack>
        <IconButton>
          <FontAwesomeIcon icon={faUser} size='lg' color='white' />
        </IconButton>
      </Stack>
      <aside>
        <Drawer open={showSidebar} onClose={() => setShowSidebar(false)}>
          <Navigation />
        </Drawer>
      </aside>
      {children}
    </Fragment>
  );
}

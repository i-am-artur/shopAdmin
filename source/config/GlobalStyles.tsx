'use client';

import { Global } from '@emotion/react';
import { primary } from '@/source/styles/colors';

export function GlobalStyles() {
  return (
    <Global
      styles={
        {
          html: {
            fontSize: '16px',
            lineHeight: 'normal'
          },
          body: {
            minHeight: '100vh',
            margin: '0 auto',
            display: 'flex',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            fontSize: '16px',
            lineHeight: 'normal',
            flexDirection: 'column'
          },
          a: {
            textDecoration: 'none !important'
          },
          'a:hover': {
            textDecoration: 'underline !important'
          },
          ul: {
            margin: 0,
            padding: 0,
            listStyleType: 'none'
          },
          button: {
            cursor: 'pointer'
          },
          '.MuiCheckbox-root': {
            padding: 0
          }
        } as any
      }
    />
  );
}

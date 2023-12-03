'use client';

import { Global } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={
        {
          '*': {
            margin: 0,
            padding: 0
          },
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
          },
          '.MuiFormControlLabel-root': {
            margin: 0
          }
        } as any
      }
    />
  );
}

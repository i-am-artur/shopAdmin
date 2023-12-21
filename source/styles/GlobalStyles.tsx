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
            color: 'blue',
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
          li: {
            listStyleType: 'none'
          },
          button: {
            cursor: 'pointer'
          },
          fieldset: {
            border: 'none'
          },
          legend: {
            fontSize: 18
          },
          '.MuiFormControlLabel-root': {
            margin: 0
          }
        } as any
      }
    />
  );
}

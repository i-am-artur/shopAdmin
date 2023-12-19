import { ReactNode } from 'react';
import ThemeRegistry from '@/source/MUI/ThemeRegistry/ThemeRegistry';
import StyledComponentsRegistry from '@/source/styles/StyledComponents/registry';
import { defaultFont } from '@/source/styles/font';
import { GlobalStyles } from '@/source/styles/GlobalStyles';
import { Stack } from '@mui/material';
import { body } from '@/source/styles/layouts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <GlobalStyles />
      <ThemeRegistry>
        <StyledComponentsRegistry>
          <Stack component='body' className={defaultFont.className} sx={{ padding: body.padding.h }}>
            {children}
          </Stack>
        </StyledComponentsRegistry>
      </ThemeRegistry>
    </html>
  );
}

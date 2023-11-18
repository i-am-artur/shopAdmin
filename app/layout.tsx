import { ReactNode } from 'react';
import ThemeRegistry from '@/source/MUI/ThemeRegistry/ThemeRegistry';
import StyledComponentsRegistry from '@/source/styles/StyledComponents/registry';
import { defaultFont } from '@/source/styles/font';
import { GlobalStyles } from '@/source/config/GlobalStyles';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <GlobalStyles />
      <ThemeRegistry>
        <StyledComponentsRegistry>
          <body className={defaultFont.className}>{children}</body>
        </StyledComponentsRegistry>
      </ThemeRegistry>
    </html>
  );
}

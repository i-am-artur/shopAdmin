import { ReactNode } from "react";
import ThemeRegistry from "@/source/MUI/ThemeRegistry/ThemeRegistry";
import StyledComponentsRegistry from "@/source/styles/StyledComponents/registry";
import { inter } from "@/source/styles/font";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <StyledComponentsRegistry>
          <body className={inter.className}>{children}</body>
        </StyledComponentsRegistry>
      </ThemeRegistry>
    </html>
  );
}

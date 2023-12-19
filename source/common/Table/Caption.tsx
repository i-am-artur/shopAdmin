import styled, { CSSProp } from 'styled-components';
import { unit } from '@/source/styles/layouts';

export const Caption = styled.caption<{ $sx?: CSSProp }>`
  margin-bottom: ${unit.gap.v}px;
  font-size: 18px;
  font-weight: bold;

  ${({ $sx }) => $sx ?? {}};
`;

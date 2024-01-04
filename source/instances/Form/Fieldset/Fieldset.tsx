import { primary } from '@/source/styles/colors';
import { radius } from '@/source/styles/borders';
import styled, { CSSProp } from 'styled-components';
import { item, unit } from '@/source/styles/layouts';

export const Fieldset = styled.fieldset<{ $variant?: 'standard' | 'outlined'; $sx?: CSSProp }>`
  row-gap: ${item.gap.v}px;
  column-gap: ${unit.gap.h}px;
  flex-direction: column;
  display: flex;

  padding: ${({ $variant }) => ($variant == 'outlined' ? item.gap.v + 'px' : null)};
  border: ${({ $variant }) => ($variant == 'outlined' ? `1px solid ${primary.main}` : null)};
  border-radius: ${({ $variant }) => ($variant == 'outlined' ? radius.general + 'px' : null)};

  ${({ $sx }) => $sx ?? null};
`;

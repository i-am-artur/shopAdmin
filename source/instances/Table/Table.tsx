'use client';
import styled, { CSSProp } from 'styled-components';
import { secondary, table } from '../../styles/colors';
import { radius } from '../../styles/borders';

const cellPadding = 8;

export const Table = styled.table<{ $sx?: CSSProp }>`
  font-size: 14px;
  border-collapse: collapse;
  border-radius: ${radius.general}px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${table.main};

  ${({ $sx }) => $sx ?? {}};
`;

export const THead = styled.thead``;

export const TH = styled.th<{ $sx?: CSSProp }>`
  padding: ${cellPadding}px;
  text-align: start;
  color: ${secondary.text};
  border: 1px solid ${table.main};

  ${({ $sx }) => $sx ?? {}};
`;

export const TBody = styled.tbody``;

export const TR = styled.tr``;

export const TD = styled.td<{ $sx?: CSSProp }>`
  padding: ${cellPadding}px;
  border: 1px solid ${table.main};

  ${({ $sx }) => $sx ?? {}};
`;

// export const Caption = styled.figcaption<{ $sx?: CSSProp }>`
//   margin-bottom: ${unit.gap.v}px;
//   font-size: inherit;
//   font-weight: bold;
//
//   ${({ $sx }) => $sx ?? {}};
// `;

// export const caption = { marginBottom: unit.gap.v, fontSize: 'inherit', fontWeight: 'bold' };

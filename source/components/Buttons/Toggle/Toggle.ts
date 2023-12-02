'use client';
import styled from 'styled-components';
import { ToggleButton } from '@mui/material';
import { secondary } from '@/source/styles/colors';

export const ToggleBtn = styled(ToggleButton)`
  padding: 5px;
  font-size: 22px;
  font-weight: bold !important;
  color: ${secondary.text} !important;
`;

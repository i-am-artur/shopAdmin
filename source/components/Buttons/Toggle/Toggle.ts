'use client';
import styled from 'styled-components';
import { ToggleButton } from '@mui/material';
import { secondary } from 'packages/shared/styles/colors';

export const ToggleBtn = styled(ToggleButton)`
  font-weight: bold !important;
  color: ${secondary.text} !important;
`;

import { Tab as MUITab, Tabs as MUITabs } from '@mui/material';
import { secondary } from '@/source/styles/colors';
import { radius } from '@/source/styles/borders';
import styled from 'styled-components';

export const Tabs = styled(MUITabs)<{
  $fullWidth?: boolean;
  $upperCase?: boolean;
}>`
  padding: 4px;
  min-height: initial !important;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  background-color: ${secondary.bg};
  border-radius: ${radius.general}px;

  & .MuiTabs-flexContainer {
    flex-wrap: wrap;
  }

  & .Mui-selected {
    color: ${secondary.text} !important;
    background-color: white;
  }

  & .MuiTabs-indicator {
    display: none;
  }

  & .MuiTab-root {
    flex: ${({ $fullWidth }) => ($fullWidth ? '1 1' : 'initial')};
    text-transform: ${({ $upperCase }) => ($upperCase ? 'uppercase' : 'initial')};
  }
`;

export const Tab = styled(MUITab)`
  padding: 8px 12px !important;
  min-height: initial !important;
  min-width: initial !important;
  font-size: 16px !important;
  color: ${secondary.text};
  border-radius: ${radius.general}px !important;
  text-transform: initial;
`;

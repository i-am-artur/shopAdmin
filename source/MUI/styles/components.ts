import { error, link } from '@/source/styles/colors';

export const components = {
  MuiFormLabel: {
    styleOverrides: {
      asterisk: {
        color: error.main
      }
    }
  },
  MuiTextField: {
    defaultProps: {
      size: 'small'
    }
  },
  MuiSelect: {
    defaultProps: {
      size: 'small'
    }
  },
  MuiButton: {
    defaultProps: {
      disableElevation: false
    }
  },
  MuiLink: {
    defaultProps: {
      color: link.main
    }
  },
  MuiIconButton: {
    defaultProps: {
      size: 'small',
      color: 'secondInverse'
    }
  }
};

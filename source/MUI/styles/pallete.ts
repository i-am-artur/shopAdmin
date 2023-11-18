import { error, primary, secondary, success } from '@/source/styles/colors';

export const palette = {
  primary: {
    main: primary.main,
    contrastText: primary.text
  },
  secondary: {
    main: secondary.main,
    contrastText: secondary.text
  },
  error: {
    main: error.main
  },
  secondInverse: {
    main: secondary.text
  },
  success: {
    main: success.main
  }
};

'use client';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { unit } from '@/source/styles/layouts';

export default function Checkbox(props: CheckboxProps & { variant?: 'regular' | 'unit' }) {
  const { variant, ...rest } = props;

  function getPadding() {
    switch (variant) {
      case 'unit':
        return `0 ${unit.gap.h}px`;
      default:
        return 0;
    }
  }

  return <MuiCheckbox sx={{ padding: getPadding() }} {...rest} />;
}

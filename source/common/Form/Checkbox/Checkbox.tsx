'use client';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { unit } from '@/source/styles/layouts';

export default function Checkbox(props: CheckboxProps & { variant?: 'regular' | 'unit' }) {
  const { variant, ...rest } = props;

  return <MuiCheckbox sx={{ padding: variant === 'unit' ? `0 ${unit.gap.h}px` : 0 }} {...rest} />;
}

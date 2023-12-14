'use client';
import { Button, Stack, TextField } from '@mui/material';
import { unit } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Fieldset } from '@/source/components/Form/Fieldset/Fieldset';

const btnStyle = { minWidth: 'inherit', paddingLeft: 8, paddingRight: 8 };

export default function Attribute() {
  return (
    <Fieldset $variant='outlined' $sx={{ flexWrap: 'wrap' }}>
      <TextField fullWidth label='Attribute' variant='standard' />
      <TextField fullWidth label='Property' variant='standard' />

      <Stack direction='row' columnGap={unit.gap.h}>
        <Stack direction='row'>
          <Button variant='contained' color='secondary' sx={btnStyle}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <TextField label='Position' />
          <Button variant='contained' color='secondary' sx={btnStyle}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        </Stack>

        <Button
          fullWidth
          color='primary'
          variant='contained'
          startIcon={<FontAwesomeIcon icon={faTrash} />}
          style={{ minWidth: 0, padding: 0 }}
        >
          Delete
        </Button>
      </Stack>
    </Fieldset>
  );
}

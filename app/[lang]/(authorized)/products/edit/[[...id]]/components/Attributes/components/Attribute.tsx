'use client';
import { Button, Stack, TextField } from '@mui/material';
import { item } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Fieldset } from '@/source/instances/Form/Fieldset/Fieldset';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';

const btnStyle = { minWidth: 'inherit', paddingLeft: 8, paddingRight: 8 };

export default function Attribute() {
  return (
    <Fieldset $variant='outlined' $sx={{ flexWrap: 'wrap' }}>
      <TextField fullWidth label='Attribute' variant='standard' />
      <TextField fullWidth label='Property' variant='standard' />

      <Stack direction='row' columnGap={item.gap.h}>
        <Stack direction='row'>
          <Button variant='contained' color='secondary' sx={btnStyle}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <TextField label='Position' sx={{ flex: '1 0 65%' }} />
          <Button variant='contained' color='secondary' sx={btnStyle}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        </Stack>

        <Button
          fullWidth
          color='primary'
          variant='contained'
          startIcon={<DeleteIcon />}
          style={{ minWidth: 'auto', flex: '1 0 35%' }}
        >
          Delete
        </Button>
      </Stack>
    </Fieldset>
  );
}

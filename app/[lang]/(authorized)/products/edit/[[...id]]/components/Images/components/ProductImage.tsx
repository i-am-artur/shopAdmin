'use client';
import { Button, Stack, TextField } from '@mui/material';
import { item } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Fieldset } from '@/source/common/Form/Fieldset/Fieldset';
import Image from 'next/image';
import { sbDelete } from '../../../../../../../../../source/common/Icons/SbIcons';

const btnStyle = { minWidth: 'inherit', paddingLeft: 8, paddingRight: 8 };

export default function ProductImage() {
  return (
    <Fieldset $variant='outlined' $sx={{ flexDirection: 'row' }}>
      <Image width={100} height={120} src='/images/dog.jpg' alt='image' />

      <Stack rowGap={item.gap.v} justifyContent='flex-end'>
        <Stack direction='row'>
          <Button variant='contained' color='secondary' sx={btnStyle}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <TextField label='Position' />
          <Button variant='contained' color='secondary' sx={btnStyle}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        </Stack>

        <Button fullWidth color='primary' variant='contained' startIcon={<FontAwesomeIcon icon={sbDelete} />}>
          Delete
        </Button>
      </Stack>
    </Fieldset>
  );
}

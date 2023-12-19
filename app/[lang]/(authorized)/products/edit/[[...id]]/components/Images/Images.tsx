'use client';
import { Button, Stack } from '@mui/material';
import { box, item } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import ProductImage from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Images/components/ProductImage';

export default function Images() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='Quantity'>
      <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPlusCircle} />}>
        Add image/video
      </Button>

      <Stack component='ul' rowGap={item.gap.v}>
        <li>
          <ProductImage />
        </li>
        <li>
          <ProductImage />
        </li>
      </Stack>
    </Stack>
  );
}

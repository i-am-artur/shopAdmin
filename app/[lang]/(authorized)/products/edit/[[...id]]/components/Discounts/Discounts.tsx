'use client';
import { Box, Button, Stack } from '@mui/material';
import { box, item } from '@/source/styles/layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { secondary } from '@/source/styles/colors';
import Discount from '@/app/[lang]/(authorized)/products/edit/[[...id]]/components/Discounts/components/Discount';

export default function Discounts() {
  return (
    <Stack component='section' rowGap={box.gap.v} arial-label='Discounts'>
      <Box color={secondary.text}>
        <FontAwesomeIcon icon={faExclamationCircle} /> When discount is activated, price range is ignored
      </Box>
      <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPlusCircle} />}>
        Add discount
      </Button>
      <Stack rowGap={item.gap.v}>
        <li>
          <Discount />
        </li>
        <li>
          <Discount />
        </li>
      </Stack>
    </Stack>
  );
}

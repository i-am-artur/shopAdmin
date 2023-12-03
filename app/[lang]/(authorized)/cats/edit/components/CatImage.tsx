'use client';
import { Button, Stack } from '@mui/material';
import { box } from '@/source/styles/layouts';
import Image from 'next/image';
import { catImage } from '@/source/styles/images';

export default function CatImage() {
  return (
    <Stack component='section' rowGap={box.gap.v} aria-label='Image'>
      <Image
        src='/images/dog.jpg'
        alt='category'
        width={catImage.maxWidth}
        height={catImage.maxWidth * catImage.ratio}
      />

      <input accept='image/*' hidden id='select-image-file' type='file' />
      <Button variant='contained' color='secondary'>
        <label htmlFor='select-image-file'>
          <div>Upload new image</div>
          <div>(SVG, JPEG, GIF, TIFF)</div>
        </label>
      </Button>
    </Stack>
  );
}

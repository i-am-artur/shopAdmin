'use client';
import { Fragment } from 'react';
import { route } from '@/source/routes/routes';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { Table, TBody, TD, TH, THead, TR } from '@/source/instances/Table/Table';
import Pagination from '@/source/instances/Pagination/Pagination';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';

export default function Reviews() {
  return (
    <Fragment>
      <Table>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all products' variant='regular' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Date</TH>
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='select product' variant='regular' />
            </TD>
            <TD $sx={{ fontWeight: 'bold' }}>
              <Link href={`${route.reviews.index.path}/id`}>name</Link>
            </TD>
            <TD>20.12.23</TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton onClick={() => alert('fds')}>
                <DeleteIcon />
              </IconButton>
            </TD>
          </TR>
          <TR>
            <TD>
              <Checkbox aria-label='select product' variant='regular' />
            </TD>
            <TD>
              <Link href={`${route.reviews.index.path}/id`}>name</Link>
            </TD>
            <TD>20.12.23</TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </TD>
          </TR>
        </TBody>
      </Table>
      <Pagination />
    </Fragment>
  );
}

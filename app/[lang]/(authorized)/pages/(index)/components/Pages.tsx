'use client';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';
import { GripIcon } from '@/source/instances/Icons/GripIcon';
import Pagination from '@/source/instances/Pagination/Pagination';
import { TBody, TD, TH, THead, TR, Table } from '@/source/instances/Table/Table';
import { route } from '@/source/routes/routes';
import { IconButton, Link } from '@mui/material';
import { Fragment } from 'react';

export default function Pages() {
  return (
    <Fragment>
      <Table>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all brands' variant='regular' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Order</TH>
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='checkbox category' variant='regular' />
            </TD>
            <TD>
              <Link href={`${route.pages.edit.path}/id`}>name</Link>
            </TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>
                <GripIcon />
              </IconButton>
            </TD>
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

'use client';
import Checkbox from '@/source/components/Form/Checkbox/Checkbox';
import { DeleteIcon } from '@/source/components/Icons/DeleteIcon';
import Pagination from '@/source/components/Pagination/Pagination';
import { TBody, TD, TH, THead, TR, Table } from '@/source/components/Table/Table';
import { route } from '@/source/routes/routes';
import { IconButton, Link } from '@mui/material';
import { Fragment } from 'react';

export default function Brands() {
  return (
    <Fragment>
      <Table>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all brands' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='checkbox category' />
            </TD>
            <TD>
              <Link href={route.brands.edit.path}>name</Link>
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

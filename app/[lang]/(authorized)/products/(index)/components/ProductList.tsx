'use client';
import { Link } from '@mui/material';
import { Table, TBody, TD, TH, THead, TR } from '@/source/components/table/Table';
import Pagination from '@/source/components/Pagination/Pagination';
import { Fragment } from 'react';
import { urls } from '@/source/routes/routes';
import { secondary } from '@/source/styles/colors';
import Checkbox from '@/source/components/Form/Checkbox/Checkbox';

export default function ProductList() {
  return (
    <Fragment>
      <Table>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all products' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Min. quantity</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='select product' />
            </TD>
            <TD>
              <Link href={urls.products.edit.path}>name</Link>
            </TD>
            <TD>34</TD>
          </TR>
          <TR>
            <TD>
              <Checkbox aria-label='select product' />
            </TD>
            <TD>
              <Link href={urls.products.edit.path} color={secondary.text}>
                name
              </Link>
            </TD>
            <TD>34</TD>
          </TR>
        </TBody>
      </Table>
      <Pagination />
    </Fragment>
  );
}

'use client';
import { Fragment } from 'react';
import { urls } from '@/source/routes/routes';
import Checkbox from '@/source/common/Form/Checkbox/Checkbox';
import { Table, TBody, TD, TH, THead, TR } from '@/source/common/Table/Table';
import Pagination from '@/source/common/Pagination/Pagination';
import Link from 'next/link';

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
            <TD>33</TD>
          </TR>
        </TBody>
      </Table>
      <Pagination />
    </Fragment>
  );
}

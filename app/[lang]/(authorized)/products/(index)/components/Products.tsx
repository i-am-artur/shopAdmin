'use client';
import { Fragment } from 'react';
import { route } from '@/source/routes/routes';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { Table, TBody, TD, TH, THead, TR } from '@/source/instances/Table/Table';
import Pagination from '@/source/instances/Pagination/Pagination';
import Link from 'next/link';

export default function Products() {
  return (
    <Fragment>
      <Table>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all products' variant='regular' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Min. quantity</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='select product' variant='regular' />
            </TD>
            <TD>
              <Link href={route.products.edit.path}>name</Link>
            </TD>
            <TD>33</TD>
          </TR>
        </TBody>
      </Table>
      <Pagination />
    </Fragment>
  );
}

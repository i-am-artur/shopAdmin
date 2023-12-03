'use client';
import { Checkbox, IconButton, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { Table, TBody, TD, TH, THead, TR } from '@/source/components/table/Table';
import Pagination from '@/source/components/Pagination/Pagination';
import { Fragment } from 'react';
import { page } from '@/source/routes/routes';

export default function Cats() {
  return (
    <Fragment>
      <Table>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all categories' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Position</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='checkbox category' />
            </TD>
            <TD>
              <Link href={page.categories.edit.path}>name</Link>
            </TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>
                <FontAwesomeIcon icon={faGrip} />
              </IconButton>
            </TD>
          </TR>
        </TBody>
      </Table>
      <Pagination />
    </Fragment>
  );
}

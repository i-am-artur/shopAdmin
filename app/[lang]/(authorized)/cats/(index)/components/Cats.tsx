'use client';
import { IconButton, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, TBody, TD, TH, THead, TR } from '@/source/instances/Table/Table';
import Pagination from '@/source/instances/Pagination/Pagination';
import { Fragment } from 'react';
import { route } from '@/source/routes/routes';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { routeCategories } from '../../src/routes';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';

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
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='checkbox category' />
            </TD>
            <TD>
              <Link href={route.categories.edit.path}>name</Link>
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

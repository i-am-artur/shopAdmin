'use client';
import { Button, IconButton, Link, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Table, TBody, TD, TH, THead, TR } from '@/source/common/table/Table';
import { Fragment } from 'react';
import { urls } from '@/source/routes/routes';
import Checkbox from '@/source/common/Form/Checkbox/Checkbox';
import { Caption } from '@/source/common/Table/Caption';
import { sbDelete } from '@/source/common/Icons/SbIcons';
import { item } from '@/source/styles/layouts';

export default function Selects() {
  return (
    <Fragment>
      <Table>
        <Caption>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            Select
            <Stack direction='row' alignItems='center' columnGap={item.gap.h}>
              <IconButton variant='contained'>
                <FontAwesomeIcon icon={faTrashCan} />
              </IconButton>
              <Button
                variant='contained'
                color='secondary'
                startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
              >
                Add select
              </Button>
            </Stack>
          </Stack>
        </Caption>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all categories' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Surcharge</TH>
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='select feature' />
            </TD>
            <TD>
              <Link href={urls.categories.edit.path}>name</Link>
            </TD>
            <TD>+$3.99</TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>{sbDelete}</IconButton>
            </TD>
          </TR>
        </TBody>
      </Table>
    </Fragment>
  );
}

'use client';
import { Button, IconButton, Link, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Table, TBody, TD, TH, THead, TR } from '@/source/instances/Table/Table';
import { Fragment } from 'react';
import { route } from '@/source/routes/routes';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { Caption } from '@/source/instances/Table/Caption';
import { item } from '@/source/styles/layouts';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';

export default function Features() {
  return (
    <Fragment>
      <Table>
        <Caption>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            Features
            <Stack direction='row' alignItems='center' columnGap={item.gap.h}>
              <IconButton>
                <FontAwesomeIcon icon={faTrashCan} />
              </IconButton>
              <Button
                variant='contained'
                color='secondary'
                startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
              >
                Add feature
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
              <Link href={route.categories.edit.path}>name</Link>
            </TD>
            <TD>+$3.99</TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </TD>
          </TR>
        </TBody>
      </Table>
    </Fragment>
  );
}

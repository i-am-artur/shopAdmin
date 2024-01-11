'use client';
import Add from '@/source/instances/Buttons/Add/Add';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';
import { TH, THead, TR, Table, TD, TBody } from '@/source/instances/Table/Table';
import { PageHeading } from '@/source/instances/Typography/Headings';
import { route } from '@/source/routes/routes';
import { box } from '@/source/styles/layouts';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';

export default function CodesPage() {
  return (
    <Stack rowGap={box.gap.v}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <PageHeading>Codes</PageHeading>
        <Add component={Link} href={route.brands.edit.path} />
      </Stack>

      <Table>
        <THead>
          <TR>
            <TH>
              <Checkbox aria-label='select all brands' variant='regular' />
            </TH>
            <TH $sx={{ width: '100%' }}>Name</TH>
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='checkbox category' variant='regular' />
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
    </Stack>
  );
}

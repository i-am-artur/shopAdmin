'use client';
import { Button, IconButton, Link, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Table, TBody, TD, TH, THead, TR } from '@/source/components/Table/Table';
import { urls } from '@/source/routes/routes';
import Checkbox from '@/source/components/Form/Checkbox/Checkbox';
import { Caption } from '@/source/components/Table/Caption';
import { item } from '@/source/styles/layouts';
import { DeleteIcon } from '@/source/components/Icons/DeleteIcon';

export default function DateOption() {
  return (
    <Stack rowGap={item.gap.v}>
      <Table>
        <Caption>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            Date
            <Stack direction='row' alignItems='center' columnGap={item.gap.h}>
              <IconButton>
                <FontAwesomeIcon icon={faTrashCan} />
              </IconButton>
              <Button
                variant='contained'
                color='secondary'
                startIcon={<FontAwesomeIcon icon={faCirclePlus} />}
              >
                Add date
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
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <Checkbox aria-label='select feature' />
            </TD>
            <TD>
              <Link href={urls.categories.edit.path}>Departure date</Link>
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

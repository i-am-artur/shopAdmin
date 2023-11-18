'use client';
import { Checkbox, IconButton, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, TBody, TD, TH, THead, TR } from '@/source/components/table/Table';

export default function Cats() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>
            <Checkbox aria-label='checkbox all categories' />
          </TH>
          <TH $sx={{ width: '100%' }}>Name</TH>
          <TH>Position</TH>
          <TH>Action</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>
            <Checkbox aria-label='checkbox category' />
          </TD>
          <TD>
            <Link href='/'>name</Link>
          </TD>
          <TD $sx={{ textAlign: 'center' }}>
            <IconButton>
              <FontAwesomeIcon icon={faGrip} />
            </IconButton>
          </TD>
          <TD $sx={{ textAlign: 'center' }}>
            <IconButton>
              <FontAwesomeIcon icon={faTrash} />
            </IconButton>
          </TD>
        </TR>
        <TR>
          <TD>
            <Checkbox aria-label='checkbox category' />
          </TD>
          <TD>
            <Link href='/'>name</Link>
          </TD>
          <TD $sx={{ textAlign: 'center' }}>
            <IconButton>
              <FontAwesomeIcon icon={faGrip} />
            </IconButton>
          </TD>
          <TD $sx={{ textAlign: 'center' }}>
            <IconButton>
              <FontAwesomeIcon icon={faTrash} />
            </IconButton>
          </TD>
        </TR>
      </TBody>
    </Table>
  );
}

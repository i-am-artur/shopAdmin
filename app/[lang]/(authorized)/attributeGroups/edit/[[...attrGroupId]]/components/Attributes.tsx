'use client';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';
import { TBody, TD, TH, THead, TR, Table } from '@/source/instances/Table/Table';
import { faGripHorizontal, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton, Stack, TextField } from '@mui/material';

export default function Attributes() {
  return (
    <Stack component='section' rowGap='inherit'>
      {/* <Divider /> */}

      {/* <SectionHeading>Attributes</SectionHeading> */}

      <Button variant='contained' color='secondary' startIcon={<FontAwesomeIcon icon={faPlusCircle} />}>
        Add attribute
      </Button>

      <Table>
        <THead>
          <TR>
            <TH $sx={{ width: '100%' }}>Attributes</TH>
            <TH>
              {/* <FontAwesomeIcon icon={faArrowDownShortWide} /> */}
              Position
            </TH>
            <TH>Delete</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>
              <TextField placeholder='Attribute name (E.g. Screen)' defaultValue='Screen' required />
            </TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>
                <FontAwesomeIcon icon={faGripHorizontal} />
              </IconButton>
            </TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </TD>
          </TR>
          <TR>
            <TD>
              <TextField placeholder='Attribute name' defaultValue='Memory' required />
            </TD>
            <TD $sx={{ textAlign: 'center' }}>
              <IconButton>
                <FontAwesomeIcon icon={faGripHorizontal} />
              </IconButton>
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

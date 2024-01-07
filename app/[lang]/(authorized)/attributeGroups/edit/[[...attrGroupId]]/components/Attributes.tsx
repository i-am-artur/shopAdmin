'use client';
import Checkbox from '@/source/instances/Form/Checkbox/Checkbox';
import { DeleteIcon } from '@/source/instances/Icons/DeleteIcon';
import Pagination from '@/source/instances/Pagination/Pagination';
import { TBody, TD, TH, THead, TR, Table } from '@/source/instances/Table/Table';
import { route } from '@/source/routes/routes';
import {
  faArrowDownShortWide,
  faGripHorizontal,
  faSortAlphaDesc,
  faSortNumericDesc
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Link, TextField } from '@mui/material';
import { Fragment } from 'react';

export default function Attributes() {
  return (
    <Fragment>
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
              <TextField placeholder='Attribute name' defaultValue='Screen' required />
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
    </Fragment>
  );
}

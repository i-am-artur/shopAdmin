'use client';
import { TablePagination } from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';

export const defaultPage = 0;
export const defaultRowsPerPage = 10;

export default function Pagination(props: {
  page?: number;
  rowsPerPage?: number;
  count?: number;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
}) {
  const [page, setPage] = useState(props.page ?? defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage ?? defaultRowsPerPage);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    props?.onPageChange && props?.onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, defaultRowsPerPage));
    setPage(defaultPage);
    props?.onRowsPerPageChange && props?.onRowsPerPageChange(parseInt(event.target.value));
  };

  return (
    <TablePagination
      sx={{
        display: 'flex',
        '.MuiSelect-select': {
          paddingTop: '4px'
        }
      }}
      size='small'
      component='div'
      count={props?.count ?? 1}
      page={props?.count > rowsPerPage ? page : defaultPage}
      rowsPerPage={rowsPerPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelDisplayedRows={({ from, to, count }) => '' + from + '-' + to + ' ' + 'from' + ' ' + count}
      labelRowsPerPage='rows'
    />
  );
}

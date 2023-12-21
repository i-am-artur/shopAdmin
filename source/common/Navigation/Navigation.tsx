'use client';
import { Collapse, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import { urls } from '@/source/routes/routes';
import { paddedItem } from '@/source/common/Navigation/styles';

export default function Navigation() {
  const [expanded, setExpanded] = useState({
    catalog: false
  });

  function toggleExpanded(listItem: string) {
    setExpanded((pre) => ({ ...pre, [listItem]: !pre[listItem] }));
  }

  return (
    <Stack
      component='nav'
      sx={{
        '.MuiListItemButton-root': {
          py: 3
        }
      }}
    >
      <List sx={{ minWidth: 180 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary='DASHBOARD' />
          </ListItemButton>
        </ListItem>

        <ListItemButton>
          <ListItemText primary='CATALOG' />
          <FontAwesomeIcon icon={true ? faChevronUp : faChevronDown} />
        </ListItemButton>
        <Collapse in={true} timeout='auto' unmountOnExit>
          <List component='div' disablePadding sx={paddedItem}>
            <ListItemButton component={Link as any} to={urls.categories.index.path}>
              <ListItemText primary='CATEGORIES' />
            </ListItemButton>
            <ListItemButton component={Link as any} to={urls.products.index.path}>
              <ListItemText primary='PRODUCTS' />
            </ListItemButton>
            <ListItemButton component={Link as any} to='/'>
              <ListItemText primary='BRANDS' />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Stack>
  );
}

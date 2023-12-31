'use client';
import { Button, Collapse, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import { urls } from '@/source/routes/routes';
import { paddedItem } from '@/source/common/Navigation/styles';
import { INavItem, navItems } from '@/source/common/Navigation/data';
import { box } from '@/source/styles/layouts';

export default function Navigation() {
  function parseNavigation(navItems?: INavItem[]) {
    if (!navItems) return;

    return (
      <List disablePadding>
        {navItems.map((el, i) => (
          <ListItem disablePadding>
            <ListItemButton component={(el?.link ? Link : null) as any} to={el?.link}>
              <ListItemText>{el.name.toUpperCase()}</ListItemText>
            </ListItemButton>
            {parseNavigation(el?.children)}
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <Stack
      component='nav'
      sx={{
        // pt: box.gap.v,
        minWidth: 180
        // '.MuiListItemButton-root': {
        //   py: 3
        // }
      }}
    >
      {parseNavigation(navItems)}
    </Stack>
  );
}

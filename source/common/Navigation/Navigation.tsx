'use client';
import { NavItem, navItems } from '@/source/common/Navigation/data';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Collapse, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [expanded, setExpanded] = useState<number[]>([]);


  function parseNavigation(navItems?: NavItem[], level: number = 0) {
    if (!navItems) return;

    return navItems.map((el, i) => {
      const hasSubItems = 'subItems' in el;
      return (
        <List key={i} disablePadding >

          <ListItem disablePadding >
            <ListItemButton
              {...('link' in el && { component: Link, to: el.link })}
              onClick={() => hasSubItems && setExpanded(pre => pre.includes(i) ? pre.filter(item => item !== i) : [...pre, i])}
            >
              <ListItemText sx={{ margin: 0 }} >
                <Box pl={level * 10}>
                  {el.name.toUpperCase()}
                </Box>
              </ListItemText>
              {hasSubItems && <FontAwesomeIcon icon={expanded.includes(i) ? faChevronUp : faChevronDown} />}
            </ListItemButton>
          </ListItem>

          {hasSubItems && <Collapse in={expanded.includes(i)}>
            {parseNavigation(el.subItems, i)}
          </Collapse>}

        </List >
      )
    })


  }

  return (
    <Box
      component='nav'
      sx={{
        minWidth: 180
      }}
    >
      {parseNavigation(navItems)}
    </Box>
  );
}

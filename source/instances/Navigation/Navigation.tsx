'use client';
import { NavItem, navItems } from '@/source/instances/Navigation/data';
import { box, unit } from '@/source/styles/layouts';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Collapse, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation({ onSelect }: { onSelect?: () => void }) {
  const [expanded, setExpanded] = useState<number[]>([]);

  function parseNavigation(navItems?: NavItem[], level: number = 0) {
    if (!navItems) return;

    return navItems.map((el, i) => {
      const hasSubItems = 'subItems' in el;

      return (
        <List key={i} disablePadding>
          <ListItem disablePadding>
            <ListItemButton
              {...('link' in el && { component: Link, to: el.link })}
              onClick={() => {
                if (hasSubItems)
                  return setExpanded((pre) =>
                    pre.includes(i) ? pre.filter((item) => item !== i) : [...pre, i],
                  );
                return onSelect && onSelect();
              }}
              sx={{ py: 3 }}
            >
              <ListItemText sx={{ margin: 0 }}>
                <Box pl={level * unit.gap.h}>{el.name.toUpperCase()}</Box>
              </ListItemText>
              {hasSubItems && <FontAwesomeIcon icon={expanded.includes(i) ? faChevronUp : faChevronDown} />}
            </ListItemButton>
          </ListItem>

          {hasSubItems && <Collapse in={expanded.includes(i)}>{parseNavigation(el.subItems, i)}</Collapse>}
        </List>
      );
    });
  }

  return (
    <Box
      component='nav'
      sx={{
        mt: unit.gap.v,
        minWidth: 180,
      }}
    >
      {parseNavigation(navItems)}
    </Box>
  );
}

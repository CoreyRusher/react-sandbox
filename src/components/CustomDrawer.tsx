import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText, Collapse, Box, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function CustomDrawer({ open, toggleDrawer, sections }) {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({});

  // Toggle collapse state for a section by index
  const handleSectionClick = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Render items (for both top-level and nested)
  const renderItems = (items, isNested = false) => {
    if (!items || !Array.isArray(items)) {
      console.warn('Invalid items array:', items);
      return null;
    }

    return items.map((item, itemIndex) => (
      <ListItemButton
        key={`item-${itemIndex}`}
        sx={{ pl: isNested ? 4 : 1 }}
        onClick={() => {
          if (item.path) {
            navigate(item.path);
            toggleDrawer(false)();
          } else if (item.onClick) {
            item.onClick();
          }
        }}
      >
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.label || 'Unnamed Item'} />
      </ListItemButton>
    ));
  };

  // Drawer content
  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {sections && Array.isArray(sections) ? (
          sections.map((section, index) => {
            // Log section for debugging
            console.log(`Rendering section ${index}:`, section);

            // If no title, render items directly
            if (!section.title) {
              return (
                <div key={`section-${index}`}>
                  {renderItems(section.items || [], false)}
                </div>
              );
            }

            // If title exists, render collapsible section
            return (
              <div key={`section-${index}`}>
                <ListItemButton onClick={() => handleSectionClick(index)}>
                  <ListItemText primary={section.title} />
                  {openSections[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSections[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {renderItems(section.items || [], true)}
                  </List>
                </Collapse>
              </div>
            );
          })
        ) : (
          <ListItemText primary="No sections provided" />
        )}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
    >
      {drawerContent}
    </Drawer>
  );
}

export default CustomDrawer;
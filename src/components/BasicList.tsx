import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MouseEvent, useState } from "react";

interface Props {
  items : string[];
  heading : string;
  onSelectItem: (item : string) => void;
}

export default function BasicList({items, heading, onSelectItem} : Props) {

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleClick = (event : MouseEvent) => console.log(event)

  return (
    <>
    { items.length === 0 && <p> No items found </p> }
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          { items.map((item, index) => 
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }} selected={selectedIndex === index}>
                <ListItemText sx={{ color : 'success.main'}}>{item}</ListItemText>
              </ListItemButton>
            </ListItem>
            )
          }
        </List>
      </nav>
    </Box>
    </>
  );
}

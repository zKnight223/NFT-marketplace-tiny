import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import navigations from "config/navigations";
import { useStyles } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

export default function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {navigations.map((navigation) => (
            <ListItem key={navigation.key} onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link
                  to={navigation.route}
                  color="primary"
                  className={classes.link}
                >
                  {navigation.name}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

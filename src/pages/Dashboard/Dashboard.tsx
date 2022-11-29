import clsx from "clsx";
import Grid from "@mui/material/Grid";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { menuPath } from "constants/menu";
import styles from "../../assets/scss/pages/_dashboard.module.scss";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const menuItems = [
  {
    key: 1,
    name: menuPath.login.name,
    path: menuPath.login.path,
  },
];

export default function Dashboard() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid md={2}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid md={10} spacing={2} padding={1}>
        <div>Content</div>
      </Grid>
    </Grid>
  );
}

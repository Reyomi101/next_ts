import React from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import useStyles from "../helper/headStyles";

export default function DrawerItems() {
  const classes = useStyles();

  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>
            REYOMI (Active) 
          </ListItemText>
        </ListItem>
        <ListItem>Username : REY</ListItem>
        <ListItem>Email : test@test.com</ListItem>
        <ListItem>Address : Kulas Light, Apt. 556, Gwenborough, 92998-3874, -37.3159, 81.1496</ListItem>
        <ListItem>Phone : 1-770-736-8031 x56442</ListItem>
        <ListItem>Website : hildegard.org</ListItem>
        <ListItem>Company : Romaguera-Crona, Multi-layered client-sever neural-net, harness real-time e-markets</ListItem>
      </List>
      <Divider />
      <List
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested Users
          </ListSubheader>
        }
      >
        {[
          "Sample 1",
          "Test 2",
          "Try 3",
          "check 4",
          "analysis 5",
          "evaluation 6",
          " investigation 7",
          "inspection 8",
          "assessment 9",
          "practice 10",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <PermIdentityIcon /> : <AccountCircleIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

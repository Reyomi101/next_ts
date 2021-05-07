import React from 'react';
import { useState, useEffect, useRef } from 'react';
import 'fontsource-roboto';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  useScrollTrigger,
  CssBaseline,
  Slide,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import clsx from 'clsx';
import useStyles from '../helper/headStyles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link';
import { useTheme } from '@material-ui/core/styles';
import DrawerItems from '../components/drawers';

const userState = createSelector(
  (state: any) => state.users,
  (users) => users
);

const GetUserID = createSelector(
  (state: any) => state.users,
  (userId) => userId
);


interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Appbar(props: Props) {
  const classes = useStyles();
  const theme = useTheme();

  //for selectors
  const ToGetUsers = useSelector(userState);
  const ToGetUsersId = useSelector(GetUserID);


  // console.log(ToGetUsersId.userId);
  const thisId = ToGetUsersId.userId;

  //state
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  const SessionName = ToGetUsers.users.map((user) => {
    const setUser = user.id == ToGetUsersId.userId;
    return setUser == true ? (
      <>
        <Typography>{user.name}</Typography>
      </>
    ) : null;
  });




  const trying = thisId.length == 0;

  

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth='md' style={{ padding: 0 }}>
            <Toolbar>
              <Typography variant='h6' className={classes.PageTitle}>
                {/* REYOMI */}
                <Link href='/' passHref>
                  <Button color='inherit' className={classes.appBarBut}>
                    Home
                  </Button>
                </Link>
                {/* <Divider className={classes.divider} orientation="vertical" /> */}
                <Link href='/add' passHref>
                  <Button color='inherit' className={classes.appBarBut}>
                    +ADD
                  </Button>
                </Link>
              </Typography>

              <Typography>
              {trying == false ? SessionName  : 'Select User' }
              </Typography>

              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='end'
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <DrawerItems />
      </Drawer>
    </>
  );
}

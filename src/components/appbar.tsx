import React from "react";
import "fontsource-roboto";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  useScrollTrigger,
  CssBaseline,
  Slide,
  Avatar,
  Divider,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../helper/headStyles";
import Link from "next/link";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Appbar(props: Props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="md" style={{ padding: 0 }}>
            <Toolbar>
              <Typography variant="h6" className={classes.PageTitle}>
                {/* REYOMI */}
				<Link href="/" passHref>
                <Button color="inherit" className={classes.appBarBut}>
                  Home
                </Button>
              </Link>
              {/* <Divider className={classes.divider} orientation="vertical" /> */}
              <Link href="/add" passHref>
                <Button color="inherit" className={classes.appBarBut}>
                  +ADD
                </Button>
              </Link>
              </Typography>
			  {/* <div className={classes.PageTitle}>
			  
			  </div> */}
              
              <Button
                // ref={anchorRef}
                // aria-controls={open ? "menu-list-grow" : undefined}
                // aria-haspopup="true"
                // onClick={handleToggle}
              >
                Reyomi <MenuIcon />
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

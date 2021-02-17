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
} from "@material-ui/core";
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
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                REYOMI
              </Typography>
              <Link href="/" passHref>
                <Button color="inherit">Home</Button>
              </Link>

              <Link href="/add" passHref>
                <Button color="inherit">+ADD</Button>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
       
      </HideOnScroll>
    </>
  );
}

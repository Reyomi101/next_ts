import useStyles from "../src/helper/headStyles";
import Layout from "../src/components/layout";
import {
  Typography,
  Avatar,
  Grid,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SendIcon from "@material-ui/icons/Send";

import { useRouter } from "next/router";

import Link from "next/link";
import { useEffect } from "react";
const BlogPage = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { title, body, userId, id } = router.query;

  return (
    <>
      <Layout title="Blog PAGE" fixed={false}>
        <Typography variant="h3">Blog PAGE</Typography>
        <hr />
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} sm={12}>
            <div className={classes.avatars}>
              <Avatar
                alt="Reyomi"
                style={{
                  width: "10rem",
                  height: "10rem",
                  color: "#fff",
                  backgroundColor: "#19857b",
                }}
              />
            </div>
            {/* <Avatar alt="Reyomi" className={classes.square}/>
            </div> */}
            <Typography variant="h4" className={classes.avatars}>
              User Id: {userId}
            </Typography>
          </Grid>
          <Grid item lg={8} md={6} sm={6}>
            <div className={classes.avatars}>
              <Avatar
                variant="rounded"
                style={{
                  width: "100%",
                  height: "20rem",
                  color: "#fff",
                  backgroundColor: "#eee",
                }}
              >
                Sample IMAGE
              </Avatar>
            </div>
          </Grid>
        </Grid>

        <Typography variant="h5" className={classes.blgtitle}>
          {title}
        </Typography>

        <Typography variant="subtitle1">{body}</Typography>
        <form noValidate autoComplete="on">
          <Grid container spacing={2}>
            <Grid item lg={10} sm={6}>
              <TextField
                id="outlined-full-width"
                label="Comment"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={2} sm={6}>
              <div className={classes.buttonIcon}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
        <Paper>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested Comments
              </ListSubheader>
            }
            className={classes.listItem}
          >
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                ipsum cupiditate harum nulla nemo in perspiciatis, labore
                laborum molestias tempore nihil odit voluptatum sint neque eos
                ex debitis aliquid officiis.
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, animi quos possimus distinctio officia facilis!
                Expedita, non deserunt quasi asperiores est suscipit possimus
                rem? Soluta quas doloremque praesentium iste ad. us distinctio
                officia facilis! Expedita, non deserunt quasi asperiores est
                suscipit possimus rem? Soluta quas doloremque praesentium iste
                ad.
              </ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Layout>
    </>
  );
};

export default BlogPage;

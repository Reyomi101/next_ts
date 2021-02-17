import useStyles from "../src/helper/headStyles";
import Layout from "../src/components/layout";
import Link from "next/link";
import {
  Typography,
  Avatar,
  Grid,
  TextField,
  Toolbar,
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
import IconButton from "@material-ui/core/IconButton";

import { useRouter } from "next/router";

import { useEffect } from "react";
const BlogPage = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const { title, body, userId, id } = router.query;

  const SearchButton = () => (
    <IconButton type="submit" color="primary">
      <SendIcon fontSize="large" />
    </IconButton>
  );

  return (
    <>
      <Layout title="Blog PAGE" fixed={false}>
        <Typography variant="h3">Blog PAGE</Typography>
        <hr />
        <Grid container spacing={2}>
          <Grid item lg={4} sm={6} xs={12}>
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

            <Typography variant="h4" className={classes.avatars}>
              User Id: {userId}
            </Typography>
          </Grid>
        
          <Grid item md={8} sm={6} xs={12}>
          <div className={classes.editButton}>
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
        
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          <Grid item md={6}>
            <div className={classes.editButton}>
              <Link
                href={{
                  pathname: "/editblog",
                  query: { userId, id, title, body },
                }}
                passHref
              >
                <Button
                  // target="_blank"
                  component="a"
                  size="small"
                  color="primary"
                  variant="contained"
                >
                  Edit Post
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>

        <Divider />
        <Typography variant="subtitle1">{body}</Typography>

        <Toolbar />
        <form>
          {/* <Grid container>
            <Grid item lg={12}> */}
              <TextField
                id="commentfield"
                label="Comment:"
                variant="outlined"
                fullWidth
                multiline
                InputProps={{ endAdornment: <SearchButton /> }}
              />
            {/* </Grid>
          </Grid> */}
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
                <AccountCircleIcon fontSize="large" />
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
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, animi quos possimus distinctio officia facilis!
                Expedita, non deserunt quasi asperiores est suscipit possimus
                rem? Soluta quas doloremque praesentium iste ad. us distinctio
                officia facilis! Expedita, non deserunt quasi asperiores est
                suscipit possimus rem? Soluta quas doloremque praesentium iste
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, animi quos possimus distinctio officia facilis!
                Expedita, non deserunt quasi asperiores est suscipit possimus
                rem? Soluta quas doloremque praesentium iste ad. us distinctio
                officia facilis! Expedita, non deserunt quasi asperiores est
                suscipit possimus rem? Soluta quas doloremque praesentium iste
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, animi quos possimus distinctio officia facilis!
                Expedita, non deserunt quasi asperiores est suscipit possimus
                rem? Soluta quas doloremque praesentium iste ad. us distinctio
                officia facilis! Expedita, non deserunt quasi asperiores est
                suscipit possimus rem? Soluta quas doloremque praesentium iste
                ad.
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </Paper>
      </Layout>
    </>
  );
};

export default BlogPage;

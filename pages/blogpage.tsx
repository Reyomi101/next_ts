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
import { Formik } from "formik";
import { BlogComment } from "../src/helper/validation/yup";
import { useRouter } from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { createStore } from "redux";
import { Create_comment } from "../src/redux/actions/mainAction";

const ForComment = createSelector(
  (state: any) => state.main,
  (comments) => comments
);

function BlogPage(props) {
  const classes = useStyles();
  const router = useRouter();
  const { title, body, userId, id } = router.query;
  const mainReducer = useSelector(ForComment);
  const [comlist, setComlist] = useState([]);

  useEffect(() => {
    setComlist(mainReducer.comments);
  });

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

            {/* <Typography variant="h5" className={classes.avatars}>
              User ID: {userId}
            </Typography>
            <Typography variant="h5" className={classes.avatars}>
              Blog ID: {id}
            </Typography> */}
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
        <Formik
          initialValues={{ commentBody: "" }}
          validationSchema={BlogComment}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            Create_comment(values);
            setComlist(mainReducer.comments);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                id="commentBody"
                name="commentBody"
                label="Comment:"
                variant="outlined"
                fullWidth
                multiline
                InputProps={{ endAdornment: <SearchButton /> }}
                value={values.commentBody}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.commentBody && Boolean(errors.commentBody)}
                helperText={Boolean(errors.commentBody) && touched.commentBody}
              />
              <Typography color="error">
                {errors.commentBody &&
                  touched.commentBody &&
                  errors.commentBody}
              </Typography>
              <div className={classes.buttonIcon}>
                {isSubmitting === false ? null : (
                  <CircularProgress disableShrink />
                )}
              </div>
            </form>
          )}
        </Formik>

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
            <Divider />
            {comlist.map((coms) => {
              return (
                <>
                  <ListItem>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>{coms.commentBody}</ListItemText>
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </Paper>
      </Layout>
    </>
  );
}

export default BlogPage;

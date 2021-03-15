import useStyles from "../../helper/headStyles";
import {
  Typography,
  Avatar,
  Grid,
  TextField,
  Divider,
  List,
  ListItemIcon,
  ListSubheader,
  Paper,
  Tooltip,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import { Formik } from "formik";
import { ForBlogComments } from "../../helper/validation/yup";
import { useRouter } from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { addComments } from "../../redux/actions/commAction";
// import { AddComment } from '../../redux/actions/mainAction';
// import { Comments } from '../../redux/interFaces/interface';
// import { AppState } from '../../redux/store';

// import {
// 	Create_comment,
// 	Remove_Comment,
// 	Update_post,
// } from '../src/redux/actions/mainAction';

// const ForComment = createSelector(
//   (state: AppState) => state.comments,
//   (comments) => comments
// );

const ForComment = createSelector(
  (state: any) => state.comments,
  (comment) => comment
);

// const ToRemoveComment = createSelector(
// 	(state: any) => state.main,
// 	(comments) => comments
// );

// const UpdatedPost = createSelector(
// 	(state: any) => state.main,
// 	(editPost) => editPost
// );

export default function BlogComment(props) {
  // for styles
  const classes = useStyles();

  //State
  const [comms, setComs] = useState([]);

  //for selectors
  const ThisComments = useSelector(ForComment);

  // console.log(comment.postId);

  //comments to dispatch
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  // const GetComments = getComments();

  useEffect(() => {
    // dispatch(addComments);
    setComs(ThisComments.comment.filter((comments) => comments.postId === id));
  }, []);

  const CommentItems = ThisComments.comment
    .map((comments, idx) => {
      let str = comments.userName;
      let firstChar = str.charAt(0).toUpperCase();
     
      return (
        <>
          {comments.postId === id ? (
            <div className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Tooltip
                    title={<h3>{comments.userName}</h3>}
                    placement="left"
                    arrow
                  >
                    <Avatar
                      style={{ color: "#19857b", backgroundColor: "#ddd" }}
                    >
                      {firstChar}
                    </Avatar>
                  </Tooltip>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography variant="subtitle2">
                    {comments.userName}
                  </Typography>
                  <Typography variant="body1">
                    {comments.commentBody}
                  </Typography>
                  <Typography variant="caption" className={classes.comBodybg}>
                    {comments.userEmail}
                  </Typography>
                </Grid>
                <Grid>
                  <div
                    className={classes.delButton2}
                    style={{ marginRight: "-20px" }}
                  >
                    <ListItemIcon>
                      <Tooltip title="UNCOMMENT" placement="right" arrow>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          className={classes.delicon}
                          color="secondary"
                          onClick={() => {
                            //   ForRemove(coms);
                          }}
                        >
                          <HighlightOffIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </div>
                </Grid>
              </Grid>
              <Divider style={{marginTop: '1em'}} />
            </div>
            
          ) : null}

         
        </>
      );
    })
    .reverse();

  //   // const mainReducer = useSelector(ForComment);
  //   // const removeThis = useSelector(ToRemoveComment);
  //   // const updatePost = useSelector(UpdatedPost);
  //   // const [comlist, setComlist] = useState([]);

  //   // useEffect(() => {
  //   // 	setComlist(mainReducer.comments.filter((comment) => comment.id === id));
  //   // }, []);

  //   // const ForRemove = (props) => {
  //   // 	// Remove_Comment(props);
  //   // 	setComlist(removeThis.comments.filter((comment) => comment.id === id));
  //   // };

  const commId = Math.random() * 10 + 1;
  const commID = Math.round(commId);

  return (
    <>
      <Formik
        initialValues={{ commentBody: "" }}
        validationSchema={ForBlogComments}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values));
          setTimeout(() => {
            addComments({
              commentBody: values.commentBody,
              postId: id,
              commentId: commID,
              userName: "Reyomi",
              userEmail: "test@test.com",
            });
            // addComments(values);
            setComs(
              ThisComments.comment.filter((comments) => comments.id === id)
            );

            setSubmitting(false);
            resetForm();
          }, 1000);
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
              InputProps={{
                endAdornment: (
                  <IconButton type="submit" color="primary">
                    <Tooltip title="Tab + Enter" placement="right" arrow>
                      {isSubmitting ? (
                        <CircularProgress disableShrink color="secondary" />
                      ) : (
                        <SendIcon fontSize="large" color="secondary" />
                      )}
                    </Tooltip>
                  </IconButton>
                ),
              }}
              value={values.commentBody}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.commentBody && Boolean(errors.commentBody)}
              helperText={Boolean(errors.commentBody) && touched.commentBody}
            />
            <Typography color="error">
              {errors.commentBody && touched.commentBody && errors.commentBody}
            </Typography>
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

          {/* { ThisComments.comment.postId === id ?
          CommentItems : null} */}
          {/* {coms} */}
          {CommentItems}
          {/* {JSON.stringify(ThisComments.comment)} */}

          {/* <div className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Tooltip title={<h3>Wonder Pets</h3>} placement="left" arrow>
                  <Avatar style={{ color: "#19857b", backgroundColor: "#ddd" }}>
                    W
                  </Avatar>
                </Tooltip>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography variant="body2">{message}</Typography>
              </Grid>
              <Grid>
                <div
                  className={classes.delButton2}
                  style={{ marginRight: "-20px" }}
                >
                  <ListItemIcon>
                    <Tooltip title="UNCOMMENT" placement="right" arrow>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        className={classes.delicon}
                        color="secondary"
                        onClick={() => {
                          //   ForRemove(coms);
                        }}
                      >
                        <HighlightOffIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </ListItemIcon>
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider />

          <div className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Tooltip
                  title={<h3>Quarantine time</h3>}
                  placement="left"
                  arrow
                >
                  <Avatar style={{ color: "#19857b", backgroundColor: "#ddd" }}>
                    Q
                  </Avatar>
                </Tooltip>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography variant="body2">{message2}</Typography>
              </Grid>
              <Grid>
                <div
                  className={classes.delButton2}
                  style={{ marginRight: "-20px" }}
                >
                  <ListItemIcon>
                    <Tooltip title="UNCOMMENT" placement="right" arrow>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        className={classes.delicon}
                        color="secondary"
                        onClick={() => {
                          //   ForRemove(coms);
                        }}
                      >
                        <HighlightOffIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </ListItemIcon>
                </div>
              </Grid>
            </Grid>
          </div> */}
          {/* {comms.map((coms) => {
              return (
                <>
                  <ListItem style={{ whiteSpace: "normal" }}>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="large" color="secondary" />
                    </ListItemIcon>
                    <ListItemText>{coms.commentBody}</ListItemText>
                    <div
                      className={classes.delButton2}
                      style={{ marginRight: "-20px" }}
                    >
                      <ListItemIcon>
                        <Tooltip title="Uncomment" placement="right" arrow>
                          <IconButton
                            aria-label="delete"
                            size="small"
                            className={classes.delicon}
                            color="secondary"
                            onClick={() => {
                              // ForRemove(coms);
                            }}
                          >
                            {onclick ? (
                              setTimeout(() => {
                                <CircularProgress disableShrink />;
                              }, 5000)
                            ) : (
                              <DeleteForeverOutlinedIcon />
                            )}
                          </IconButton>
                        </Tooltip>
                      </ListItemIcon>
                    </div>
                  </ListItem>
                  <Divider />
                </>
              );
            })
            .reverse()} */}
        </List>
      </Paper>
    </>
  );
}

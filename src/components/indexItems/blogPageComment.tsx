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
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { addComments } from "../../redux/actions/commAction";
// import { getComments } from "../../redux/actions/mainAction";

import { getComment } from "../../redux/actions/commAction";
// import { Comments } from '../../redux/interFaces/interface';
// import { AppState } from '../../redux/store';

import {
	// Create_comment,
	Remove_Comment,
	Remove_Comment_s,
	// Update_post,
} from '../../redux/actions/commAction';

// const ForComment = createSelector(
//   (state: AppState) => state.comments,
//   (comments) => comments
// );

const GetComments = createSelector(
  (state: any) => state.comments,
  (comments) => comments
);

const ForComment = createSelector(
  (state: any) => state.comments,
  (comment) => comment
);

const userState = createSelector(
  (state: any) => state.users,
  (users) => users
);

const GetUserID = createSelector(
  (state: any) => state.users,
  (userId) => userId
);

const GetDefUser = createSelector(
  (state: any) => state.users,
  (defaultUser) => defaultUser
)


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

  //for selectors
  const ThisComments = useSelector(ForComment);
  const PostComments = useSelector(GetComments);
  
  //for select user
  const ToGetUsers = useSelector(userState);
  const ToGetUsersId = useSelector(GetUserID);
  const ToGetDefUser = useSelector(GetDefUser);
  

  const UserID = ToGetUsersId.userId;


  // const trying = thisId.length == 0;

  //State
  const [comms, setComs] = useState([]);
  const comList = useRef(null);
  comList.current = PostComments.comments;
  const ListComments = comList.current;

  //comments to dispatch
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const GetComment = getComment();


    const ForRemove = (props) => {
    	Remove_Comment(props);
    	// setComlist(removeThis.comments.filter((comment) => comment.id === id));
    };

    const ComsRemove = (props) => {
      console.log('onPage',props);
    	Remove_Comment_s(props);
    	// setComlist(removeThis.comments.filter((comment) => comment.id === id));
    };


  useEffect(() => {
    dispatch(GetComment);
    setComs(PostComments.comments.filter((comm) => comm.postId === id));
  }, [dispatch]);

  //API comments list
  const APIComments = ListComments.map((tryThis) => {
    const list = tryThis.postId == id;
    let str = tryThis.name;
    let firstChar = str.charAt(0).toUpperCase();

    return list === true ? (
      <div className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Tooltip title={<h3>{tryThis.name}</h3>} placement="left" arrow>
              <Avatar style={{ color: "#19857b", backgroundColor: "#ddd" }}>
                {firstChar}
              </Avatar>
            </Tooltip>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="subtitle2">{tryThis.name}</Typography>
            <Typography variant="body1">{tryThis.body}</Typography>
            <Typography variant="caption" className={classes.comBodybg}>
              {tryThis.email}
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
                      ComsRemove(tryThis);
                    }}
                  >
                    <HighlightOffIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ListItemIcon>
            </div>
            <Typography variant="caption" className={classes.delButton2}>
              {tryThis.id}
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "1em" }} />
      </div>
    ) : null;
  }).reverse();

  // console.log(APIComments);

  //add Comments
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
                              ForRemove(comments);
                          }}
                        >
                          <HighlightOffIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </div>
                  <Typography variant="caption" className={classes.delButton2}>
                    {comments.commentId}
                  </Typography>
                </Grid>
              </Grid>
              <Divider style={{ marginTop: "1em" }} />
            </div>
          ) : null}
        </>
      );
    })
    .reverse();

  const commId = Math.random() * 10 + 1;
  const commID = Math.round(commId);


  const thistUser = ToGetUsers.users.find((Uname) => Uname.id === UserID); //to get user info


  return (
    <>
      <Formik
        initialValues={{ commentBody: "" }}
        validationSchema={ForBlogComments}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // alert(JSON.stringify(values));
          setTimeout(() => {
            addComments({
              postId: id,
              commentId: commID,
              userName: UserID === thistUser.id ?  thistUser.name  : 'reyomi'  ,
              // userName: "Reyomi",
              userEmail: thistUser.email,
              commentBody: values.commentBody,
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
            {UserID == 0 ?  
            <TextField disabled id="standard-disabled" 
            label="Disabled" 
            variant="outlined"
            fullWidth
            multiline
            defaultValue="To post Comment, Please select user first!" /> 
            :
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
            }

           
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

          {/* {CommentItems} */}

          {[CommentItems, APIComments]}
        </List>
      </Paper>
    </>
  );
}

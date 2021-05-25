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
  Modal,
  Fade,
  Backdrop,
  Toolbar,
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
import EditIcon from '@material-ui/icons/Edit';
import { getComment, Get_Comment_info, Update_Comment } from "../../redux/actions/commAction";
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

const GetCommentID = createSelector(
  (state: any) => state.comments,
  (editComment) => editComment
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

  console.log(ThisComments.editComment);

  const PostComments = useSelector(GetComments);
  
  //for select user
  const ToGetUsers = useSelector(userState);
  const ToGetUsersId = useSelector(GetUserID);
  // const ToGetDefUser = useSelector(GetDefUser);
  
  const UserID = ToGetUsersId.userId;

  // for modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  


  // to get CommentID
  const ToGetCommentID = useSelector(GetCommentID);
  
  const CommID = ToGetCommentID.editComment;


  const toGeCommentID = (props) => {
    Get_Comment_info(props)
    
}


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
    	Remove_Comment(props); // remove comment for API
    	// setComlist(removeThis.comments.filter((comment) => comment.id === id));
    };

    const ComsRemove = (props) => {
      console.log('onPage',props);
    	Remove_Comment_s(props);// remove new comment
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
            <Tooltip title="EDIT COMMENT" placement="right" arrow>
              <IconButton  size="small" onClick={handleOpen}
                    className={classes.delicon2}  color="secondary">
              <EditIcon fontSize="small" onClick={()=>{toGeCommentID(tryThis)}}/>
              </IconButton>
            </Tooltip>
            {/* <Typography variant="caption" className={classes.delButton2}>
              {tryThis.id}
            </Typography> */}
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "1em" }} />
      </div>
    ) : null;
  }).reverse();

  // console.log(APIComments);

  const ECBody = ToGetCommentID.editComment.body;
  const ECPostId = ToGetCommentID.editComment.postId;
  const ECId = ToGetCommentID.editComment.id;
  const ECName = ToGetCommentID.editComment.name;
  const ECEmail = ToGetCommentID.editComment.email;




  //add Comments
  const CommentItems = ThisComments.comment
    .map((comments, idx) => {
      let str = comments.name;
      let firstChar = str.charAt(0).toUpperCase();

      // function getInfo() {
      //   if( ECBody != 0){
      //       return ECBody
      //   }

      //   else {
      //     return comments.body
      //   }

      // }

      return (
        <>
          {comments.postId === id ? (
            <div className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Tooltip
                    title={<h3>{comments.name}</h3>}
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
                    {comments.name}
                  </Typography>
                  <Typography variant="body1">
                    {/* {getInfo()}  */}
                    {comments.body === undefined ? ECBody : comments.body }
                  </Typography>
                  <Typography variant="caption" className={classes.comBodybg}>
                    {comments.email}
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
                  <Tooltip title="EDIT COMMENT" placement="right" arrow>
                    <IconButton  size="small" onClick={handleOpen}
                          className={classes.delicon2}  color="secondary">
                    <EditIcon fontSize="small" onClick={()=>{toGeCommentID(comments)}}/>
                    </IconButton>
                  </Tooltip>
           
                </Grid>
              </Grid>
              <Divider style={{ marginTop: "1em" }} />
            </div>
          ) : null}
        </>
      );
    })
    .reverse();

    

  const commId = Math.random() * 100 + 1;
  const commID = Math.round(commId);


  const thisUser = ToGetUsers.users.find((Uname) => Uname.id === UserID); //to get user info

  // const thisComment = ToGetCommentID.comments.find((me)=> me.id === CommID.id ) // to get comment info

  // console.log(thisComment[0]);


  return (
    <>
      <Formik
        initialValues={{ body: "" }}
        validationSchema={ForBlogComments}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // alert(JSON.stringify(values));
          setTimeout(() => {
            addComments({
              postId: id,
              id: commID,
              name: UserID === thisUser.id ?  thisUser.name  : 'reyomi'  ,
              // userName: "Reyomi",
              email: thisUser.email,
              body: values.body,
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
            id="body"
            name="body"
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
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.body && Boolean(errors.body)}
            helperText={Boolean(errors.body) && touched.body}
          />
            }

           
            <Typography color="error">
              {errors.body && touched.body && errors.body}
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
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <Typography variant='h4' id="transition-modal-title">Edit Comment</Typography>
            <Toolbar />
            <Formik
              initialValues={{ body: CommID.body }} 
              validationSchema={ForBlogComments}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // alert(JSON.stringify(values));
                setTimeout(() => {
                  Update_Comment({
                    postId: id,
                    id:  CommID.id,
                    name: CommID.name,
                    email: CommID.email,
                    body: values.body,
                  });
                  // Update_Comment(values);
                  setComs(
                    ToGetCommentID.comment.filter((comms) => comms.postId === id)
                  );

                  setSubmitting(false);
                  resetForm();
                  handleClose();
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
            {/* {UserID == 0 ?  
            <TextField disabled id="standard-disabled" 
            label="Disabled" 
            variant="outlined"
            fullWidth
            multiline
            defaultValue="To post Comment, Please select user first!" /> 
            : */}
            <TextField
            id="body"
            name="body"
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
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.body && Boolean(errors.body)}
            helperText={Boolean(errors.body) && touched.body}
          />
            {/* } */}

           
            <Typography color="error">
              {errors.body && touched.body && errors.body}
            </Typography>
          </form>
        )}
      </Formik>
            <Typography variant="body1" id="transition-modal-description">
              _______________________________________________________________________________________________ </Typography>  
          </div>
        </Fade>
      </Modal>
    </>
  );
}

import useStyles from '../../helper/headStyles';
import Layout from '../../components/layout';
import Link from 'next/link';
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
  Tooltip,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import { Formik } from 'formik';
import { ForBlogComments } from '../../helper/validation/yup';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getComments } from '../../redux/actions/mainAction';
import { Comments } from '../../redux/interFaces/interface';
import { AppState } from '../../redux/store';

// import {
// 	Create_comment,
// 	Remove_Comment,
// 	Update_post,
// } from '../src/redux/actions/mainAction';

// const ForComment = createSelector(
//   (state: AppState) => state.comments,
//   (comments) => comments
// );

// const ToRemoveComment = createSelector(
// 	(state: any) => state.main,
// 	(comments) => comments
// );

// const UpdatedPost = createSelector(
// 	(state: any) => state.main,
// 	(editPost) => editPost
// );

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Placeat debitis iste consectetur hic sed neque quia impedit ad corrupti suscipit fuga 
  dolorem itaque mollitia facere quibusdam, molestiae nisi laborum saepe.;
 `;

const message2 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quas quasi repellat omnis harum eum sit voluptas fugiat accusantium cumque, sint nam iusto sed repudiandae, provident soluta reiciendis nobis libero beatae eligendi! Enim deleniti a nam fuga praesentium doloribus est maxime! Asperiores, impedit est sed debitis voluptas officia in porro nulla ut, illo mollitia, doloribus rerum labore quos ipsam iure. Unde dignissimos, beatae culpa exercitationem sunt rerum eligendi quas perferendis perspiciatis, eaque itaque doloribus est aspernatur libero iste! Placeat commodi officiis accusantium repudiandae alias deleniti quia ut mollitia quam dolorem error similique cum, impedit eos velit possimus. A, unde quis?
`;
export default function BlogComment(props) {
  // for styles
  const classes = useStyles();

  //State
  const [coms, setComs] = useState();

  //for selectors
//   const Comments = useSelector(ForComment);

  //comments to dispatch
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const GetComments = getComments();

  useEffect(() => {
    dispatch(GetComments);
    // setComs(Comments.comments.filter((comment: Comments) => id === comment.postId))
  }, [dispatch]);

//   const CommentItems = Comments.comments.map((comment: Comments, idx) => {
//     let str = comment.name;
//     let firstChar = str.charAt(0).toUpperCase();
//     //   comments.comments.filter((comment)=> comment.postId === id)

//     return (
//       <>
//         <div className={classes.paper}>
//           <Grid container wrap='nowrap' spacing={2}>
//             <Grid item>
//               <Tooltip title={<h3>{comment.name}</h3>} placement='left' arrow>
//                 <Avatar style={{ color: '#19857b', backgroundColor: '#ddd' }}>
//                   {firstChar}
//                 </Avatar>
//               </Tooltip>
//             </Grid>
//             <Grid item xs zeroMinWidth>
//               <Typography variant='subtitle2'>{comment.name}</Typography>
//               <Typography variant='body2'>{comment.body}</Typography>
//               <Typography variant='caption' className={classes.comBodybg}>
//                 {comment.email}
//               </Typography>
//             </Grid>
//             <Grid>
//               <div
//                 className={classes.delButton2}
//                 style={{ marginRight: '-20px' }}>
//                 <ListItemIcon>
//                   <Tooltip title='UNCOMMENT' placement='right' arrow>
//                     <IconButton
//                       aria-label='delete'
//                       size='small'
//                       className={classes.delicon}
//                       color='secondary'
//                       onClick={() => {
//                         //   ForRemove(coms);
//                       }}>
//                       <HighlightOffIcon fontSize='small' />
//                     </IconButton>
//                   </Tooltip>
//                 </ListItemIcon>
//               </div>
//             </Grid>
//           </Grid>
//         </div>
//         <Divider />
//       </>
//     );
//   });

  // const mainReducer = useSelector(ForComment);
  // const removeThis = useSelector(ToRemoveComment);
  // const updatePost = useSelector(UpdatedPost);
  // const [comlist, setComlist] = useState([]);

  // useEffect(() => {
  // 	setComlist(mainReducer.comments.filter((comment) => comment.id === id));
  // }, []);

  // const ForRemove = (props) => {
  // 	// Remove_Comment(props);
  // 	setComlist(removeThis.comments.filter((comment) => comment.id === id));
  // };

  return (
    <>
      <Formik
        initialValues={{ commentBody: '' }}
        validationSchema={ForBlogComments}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            // Create_comment({
            // 	commentBody: values.commentBody,
            // 	id: id,
            // });
            // setComlist(
            // 	mainReducer.comments.filter((comment) => comment.id === id)
            // );

            setSubmitting(false);
            resetForm();
          }, 100);
        }}>
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
              id='commentBody'
              name='commentBody'
              label='Comment:'
              variant='outlined'
              fullWidth
              multiline
              InputProps={{
                endAdornment: (
                  <IconButton type='submit' color='primary'>
                    <Tooltip title='Tab + Enter' placement='right' arrow>
                      {isSubmitting ? (
                        <CircularProgress disableShrink color='secondary' />
                      ) : (
                        <SendIcon fontSize='large' color='secondary' />
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
            <Typography color='error'>
              {errors.commentBody && touched.commentBody && errors.commentBody}
            </Typography>
          </form>
        )}
      </Formik>

      <Paper>
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Nested Comments
            </ListSubheader>
          }
          className={classes.listItem}>
          <Divider />

          {/* { comments.postId === id ?
          CommentItems : null} */}
          {/* {coms} */}
          {/* {CommentItems} */}

          {/* <div className={classes.paper}>
            <Grid container wrap='nowrap' spacing={2}>
              <Grid item>
                <Tooltip title={<h3>Wonder Pets</h3>} placement='left' arrow>
                  <Avatar style={{ color: '#19857b', backgroundColor: '#ddd' }}>
                    W
                  </Avatar>
                </Tooltip>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography variant='body2'>{message}</Typography>
              </Grid>
              <Grid>
                <div
                  className={classes.delButton2}
                  style={{ marginRight: '-20px' }}>
                  <ListItemIcon>
                    <Tooltip title='UNCOMMENT' placement='right' arrow>
                      <IconButton
                        aria-label='delete'
                        size='small'
                        className={classes.delicon}
                        color='secondary'
                        onClick={() => {
                          //   ForRemove(coms);
                        }}>
                        <HighlightOffIcon fontSize='small' />
                      </IconButton>
                    </Tooltip>
                  </ListItemIcon>
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider />

          <div className={classes.paper}>
            <Grid container wrap='nowrap' spacing={2}>
              <Grid item>
                <Tooltip
                  title={<h3>Quarantine time</h3>}
                  placement='left'
                  arrow>
                  <Avatar style={{ color: '#19857b', backgroundColor: '#ddd' }}>
                    Q
                  </Avatar>
                </Tooltip>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography variant='body2'>{message2}</Typography>
              </Grid>
              <Grid>
                <div
                  className={classes.delButton2}
                  style={{ marginRight: '-20px' }}>
                  <ListItemIcon>
                    <Tooltip title='UNCOMMENT' placement='right' arrow>
                      <IconButton
                        aria-label='delete'
                        size='small'
                        className={classes.delicon}
                        color='secondary'
                        onClick={() => {
                          //   ForRemove(coms);
                        }}>
                        <HighlightOffIcon fontSize='small' />
                      </IconButton>
                    </Tooltip>
                  </ListItemIcon>
                </div>
              </Grid>
            </Grid>
          </div> */}
          {/* {comlist
							.map((coms) => {
								return (
									<>
										<ListItem style={{ whiteSpace: 'normal' }}>
											<ListItemIcon>
												<AccountCircleIcon fontSize='large' color='secondary' />
											</ListItemIcon>
											<ListItemText>{coms.commentBody}</ListItemText>
											<div
												className={classes.delButton2}
												style={{ marginRight: '-20px' }}>
												<ListItemIcon>
													<Tooltip title='Uncomment' placement='right' arrow>
														<IconButton
															aria-label='delete'
															size='small'
															className={classes.delicon}
															color='secondary'
															onClick={() => {
																ForRemove(coms);
															}}>
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

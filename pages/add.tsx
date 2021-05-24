import React from 'react';
import Layout from '../src/components/layout';
import useStyles from '../src/helper/headStyles';
import {
  TextField,
  Button,
  LinearProgress,
  Grid,
  Typography,
  Toolbar,
} from '@material-ui/core';

import { useState, useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { BlogAdd } from '../src/helper/validation/yup';
import { connect } from 'react-redux';
import {
  // addPostAction,
  addPosts,
  // addNewPosts,
  // addNewPost,
} from '../src/redux/actions/mainAction';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
// import  {newPosts} from '../src/redux/interFaces/interface';

const GetNewPost = createSelector(
  (state: any) => state.posts,
  (newPosts) => newPosts
);

const GetUserID = createSelector(
  (state: any) => state.users,
  (userId) => userId
)

export default function Add() {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  // const [postlist, setPostlist] = useState([]);

  const getNewPostList = useSelector(GetNewPost);
  const ToGetUserId = useSelector(GetUserID);

  const UserID = ToGetUserId.userId;
  // const forUserId = UserID.length == 0;

  // console.log(UserID);

  const dispatch = useDispatch();

  const progressRef = useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  const postId = Math.random() * 110 + 100;
  const postID = Math.round(postId);


  return (
    <div>
      <Layout title='Add BLOG' fixed={true}>
      <Toolbar />
        <Typography variant='h3'>This is ADD page</Typography>
        <Toolbar />
        <Typography variant='body1' style={{ margin: '1rem' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          culpa? A odit dolorem illo delectus fuga labore fugiat culpa libero et
          recusandae officia accusantium laborum numquam sit necessitatibus
          fugit, temporibus incidunt veniam modi exercitationem? Quia inventore
          earum aliquam dolorem veniam dicta, minima excepturi officia
          repudiandae culpa ea explicabo dolores sunt.
        </Typography>

        <div className={classes.addform}>
        { UserID == 0 ?  <Typography variant='h5' >
            {/* @ts-ignore */}
            <center>To add post, Please select user first!</center> 
          </Typography> 
          
          : 

        <Formik
          initialValues={{ title: '', body: '', userId: UserID, id: postID  }}
          validationSchema={BlogAdd}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              addPosts(values);
              setSubmitting(false);
              resetForm();
            }, 400);
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
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id='title'
                    name='title'
                    label='Subject Tilte'
                    fullWidth
                    margin='normal'
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant='outlined'
                    error={touched.title && Boolean(errors.title)}
                    helperText={Boolean(errors.title) && touched.title}
                  />
                  <Typography color='error'>
                    {errors.title && touched.title && errors.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='body'
                    name='body'
                    label='Descriptions'
                    fullWidth
                    multiline
                    value={values.body}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant='outlined'
                    error={touched.body && Boolean(errors.body)}
                    helperText={Boolean(errors.body) && touched.body}
                  />
                  <Typography color='error'>
                    {errors.body && touched.body && errors.body}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    disabled={isSubmitting}>
                    Submit
                  </Button>
                  {/* <Typography color='error'>
                    { errors.userId}
                  </Typography> */}
                </Grid>
                <Grid item className={classes.loader} xs={9}>
                  {isSubmitting === false ? null : (
                    <LinearProgress
                      variant='buffer'
                      style={{ marginTop: '1rem' }}
                      value={progress}
                      valueBuffer={buffer}
                    />
                  )}
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        }
        </div>
        
        {/* <Typography>for testing area =
         {  JSON.stringify(getNewPostList.newPosts)}
        </Typography>  */}
      
      </Layout>
    </div>
  );
}

import Link from 'next/link';
import useStyles from '../../helper/headStyles';
import Pagination from '@material-ui/lab/Pagination';
import { Skeleton } from '@material-ui/lab';
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Button,
  Grid,
  Toolbar,
} from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useRouter } from 'next/router';
import { getPosts } from '../../redux/actions/mainAction';
import  {addPosts}  from '../../redux/actions/mainAction';
import  {AddComment}  from '../../redux/actions/mainAction';
// import ImageGrid from '../skeleton'
import ContentLoader from 'react-content-loader'

const PostsItems = createSelector(
  (state: any) => state.posts,
  (posts) => posts
);


const NewPostList = createSelector (
  (state: any) => state.posts,
  (newPosts) => newPosts
)

const CommentPost = createSelector (
  (state: any) => state.posts,
  (comments) => comments
)

const ForUpdate = createSelector(
	(state: any) => state.posts,
	(editPost) => editPost
);

export default function MainPosts(props) {
  //for styles
  const classes = useStyles();

  //Selectors
  const getPostItems = useSelector(PostsItems);
  const getNewItems = useSelector(NewPostList);
  const getCommentItems = useSelector(CommentPost);
  const forUpdatePost = useSelector(ForUpdate);

  //For States
  const postList = useRef(null);
  postList.current = getPostItems.posts;
  const listPosts = postList.current;
  // const [newPostList, setNewPots] = useState([]);
  // const newPostList = useRef(null);
  // newPostList.current = getNewItems.newPosts;
  // const newListPost = newPostList.current; 

  // console.log(getPostItems);

  //post to dispatch & routes
  const router = useRouter();
  const { id, userId, title, body } = router.query;
  const dispatch = useDispatch();
  const GetPost = getPosts();
  // const GetComment = getComment();
  // const NewPost = addPosts([]);
  

  //for loader
  const [loader, setLoader] = useState(true);

  // pagination
  const limit = 6;
  const [page, setPage] = useState(1);
  const rateTotal = listPosts.length / limit;
  const total = Math.round(rateTotal);

  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setLoader(true);
    setTimeout(() => {
      setPage(newPage);
      setLoader(false);
    }, 2500);
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      dispatch(GetPost);
      // dispatch(GetComment);
      
      // setNewPots(getNewItems.newPosts)
      setLoader(false);
    }, 2500);
  }, [dispatch]);

  // console.log(setPageItems)

  // const allPost = {getNewItems === true ? listPosts : newListPost };

  //data from API to state

  const StatePostItems = listPosts
    .slice((page - 1) * limit, page * limit)
    .map((itemList, idx) => (
      <Grid item lg={4} md={6} xs={12}>
        <Paper className={classes.paper}>
          <Card>
            <CardContent>
              <Typography variant='h5'>
                {/* {itemList.title} */}
                {itemList.title === undefined ? forUpdatePost.editPost.title : itemList.title}
              </Typography>
              <Typography variant='body1'>
                {/* {itemList.body} */}
                {itemList.body === undefined ? forUpdatePost.editPost.body : itemList.body}
                </Typography>
            </CardContent>
          </Card>
          <div className={classes.bottomcard}>
            {/* <Typography variant='body1' className={classes.pageno}>
              {itemList.userId} , {itemList.id}
            </Typography> */}
            <div className={classes.linkButton}>
              <Link
                key={idx}
                href={{
                  pathname: '/blogpage',
                  query: {
                    title: itemList.title,
                    body: itemList.body,
                    id: itemList.id,
                    userId: itemList.userId,
                  },
                }}
                passHref>
                <Button
                  component='a'
                  size='small'
                  color='primary'
                  variant='contained'>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      </Grid>
    ));


    //New POST items

    const NewListItems = getNewItems.newPosts
    .slice((page - 1) * limit, page * limit)
    .map((newItem, idx) => (
      <Grid item lg={4} md={6} xs={12}>
        <Paper className={classes.paper}>
          <Card>
            <CardContent>
              <Typography variant='h5'>
                {/* {newItem.title} */}
                {newItem.title === undefined ? forUpdatePost.editPost.title : newItem.title}
                </Typography>
              <Typography variant='body1'>
                {/* {newItem.body} */}
                {newItem.body === undefined ? forUpdatePost.editPost.body : newItem.body}
                </Typography>
            </CardContent>
          </Card>
          <div className={classes.bottomcard}>
            {/* <Typography variant='body1' className={classes.pageno}>
              {newItem.userId} , {newItem.id}
            </Typography> */}
            <div className={classes.linkButton}>
              <Link
                key={idx}
                href={{
                  pathname: '/blogpage',
                  query: {
                    title: newItem.title,
                    body: newItem.body,
                    id: newItem.id,
                    userId: newItem.userId,
                  },
                }}
                passHref>
                <Button
                  component='a'
                  size='small'
                  color='primary'
                  variant='contained'>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      </Grid>
    ));

  

  return (
    <div style={{ marginTop: '1rem' }}>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
        spacing={2}>
        {loader === true ? (
          <ContentLoader
          width={900}
          height={700}
          // viewBox="0 0 800 575"
          viewBox="0 0 900 700"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="38" rx="5" ry="5" width="300" height="328"  />
          <rect x="315" y="37" rx="3" ry="5" width="280" height="328" />
          <rect x="612" y="36" rx="3" ry="5" width="280" height="328" />
          <rect x="0" y="383" rx="5" ry="5" width="300" height="320" />
          <rect x="315" y="381" rx="5" ry="5" width="280" height="320" />
          <rect x="611" y="379" rx="5" ry="5" width="280" height="320" />
        </ContentLoader>
        ) : (
          // NewListItems === null ?  StatePostItems :  [NewListItems,StatePostItems]
          [NewListItems,StatePostItems]
          // StatePostItems
          // NewListItems
        )}
      </Grid>

      <Toolbar />
      <div className={classes.pagenator}>
        <Pagination
          count={total}
          page={page}
          onChange={handleChange}
          color='primary'
          size="small"
          shape='rounded'
          showFirstButton
          showLastButton
        />
      </div>
      <Toolbar />
    </div>
  );
}

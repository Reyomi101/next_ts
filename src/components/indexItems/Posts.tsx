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



const PostsItems = createSelector(
  (state: any) => state.posts,
  (posts) => posts
);

// function paginator(array, limit, page) {
//   return array.slice((page - 1) * limit, page * limit);
// }

export default function MainPosts(props) {
  //for styles
  const classes = useStyles();

  //Selectors
  const getPostItems = useSelector(PostsItems);

  //For States
  const postList = useRef(null);
  postList.current = getPostItems.posts;
  const listPosts = postList.current;

  //post to dispatch
  const router = useRouter();
  const { id, userId, title, body } = router.query;
  const dispatch = useDispatch();
  const GetPost = getPosts();

  //for loader
  const [loader, setLoader] = useState(true);

  // pagination
  const limit = 6;
  const [pageItems, setPageItems] = useState();
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
      // setPageItems(paginator(listPosts, limit, page));
      setLoader(false);
    }, 2500);
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      dispatch(GetPost);
      setLoader(false);
    }, 2500);
  }, [dispatch]);

  // console.log(setPageItems)

  //data from API to state

  const StatePostItems = listPosts
    .slice((page - 1) * limit, page * limit)
    .map((itemList, idx) => (
      <Grid item lg={4} md={6} xs={12}>
        <Paper className={classes.paper}>
          <Card>
            <CardContent>
              <Typography variant='h5'>{itemList.title}</Typography>
              <Typography variant='body1'>{itemList.body}</Typography>
            </CardContent>
          </Card>
          <div className={classes.bottomcard}>
            <Typography variant='body1' className={classes.pageno}>
              {itemList.userId} , {itemList.id}
            </Typography>
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

  // data from pagination

  return (
    <div style={{ marginTop: '1rem' }}>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
        spacing={2}>
        {loader === true ? (
          <Skeleton variant='rect' width='100%'>
            <div style={{ paddingTop: '57%', marginTop: '20px' }} />
          </Skeleton>
        ) : (
          // NewPostItems === undefined ?  StatePostItems : NewPostItems
          StatePostItems
        )}
      </Grid>

      <Toolbar />
      <div className={classes.pagenator}>
        <Pagination
          count={total}
          page={page}
          onChange={handleChange}
          color='primary'
          size='large'
          shape='rounded'
          showFirstButton
          showLastButton
        />
      </div>
      <Toolbar />
    </div>
  );
}

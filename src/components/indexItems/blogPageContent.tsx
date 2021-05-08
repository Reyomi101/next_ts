import useStyles from '../../helper/headStyles';
import Link from 'next/link';
import {
  Typography,
  Grid,
  Tooltip,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { getUserId, getUser } from '../../redux/actions/userAction';
import IconButton from '@material-ui/core/IconButton';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Title } from '@material-ui/icons';

const GetUserID = createSelector(
  (state: any) => state.users,
  (userId) => userId
)


const ForUpdate = createSelector(
	(state: any) => state.posts,
	(editPost) => editPost
);

export default function BlogPageContent(props) {
  const classes = useStyles();
  const router = useRouter();
  const { userId, id, title, body } = router.query;
  const ToGetUserId = useSelector(GetUserID);
  const forUpdatePost = useSelector(ForUpdate);

  const UserID = ToGetUserId.userId;
  
  return (
    <>
      <Grid container spacing={2} className={classes.Grids}>
        <Grid item md={9} sm={9} xs={8}>
          <Typography variant='h4'>
            {/* {title} */}
            {title === undefined ? forUpdatePost.editPost.title : title}
          </Typography>
        </Grid>

        { UserID == userId ?
        <Grid item md={3} sm={3} xs={4}>
          <div className={classes.editButton}>
          <ButtonGroup disableElevation variant='contained' size='small'>
                <Tooltip title='EDIT POST' placement='top' arrow>
            <Link
              //   href=''
              href={{
                pathname: '/editblog',
                query: { userId, id, title, body },
              }}
              passHref>
                  <Button component='a' color='secondary'>
                    <EditIcon color='inherit' />
                  </Button>
            </Link>
            </Tooltip>
            <Tooltip title='DISCARD POST' placement='top' arrow>
                  <Button color='inherit' className={classes.delicon}>
                    <DeleteForeverOutlinedIcon  color='secondary'/>
                  </Button>
                </Tooltip>
              </ButtonGroup>
          </div>
        </Grid>
        : null
        }
      </Grid>

      {/* {forButtons} */}

      <Typography variant='body1'>
        {/* {body} */}
        {body === undefined ? forUpdatePost.editPost.body : body}
        {/* user id = {JSON.stringify(ToGetUserId.userId)}
        test id = {userId} */}
      </Typography>

      {/* <Typography>
					 for testing area = {JSON.stringify(forUpdatePost.editPost)}
				</Typography> */}
    </>
  );
}

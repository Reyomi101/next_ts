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

import IconButton from '@material-ui/core/IconButton';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { Title } from '@material-ui/icons';

export default function BlogPageContent(props) {
  const classes = useStyles();
  const router = useRouter();
  const { userId, id, title, body } = router.query;

  return (
    <>
      <Grid container spacing={2} className={classes.Grids}>
        <Grid item md={9} sm={9} xs={8}>
          <Typography variant='h4'>{title}</Typography>
        </Grid>
        <Grid item md={3} sm={3} xs={4}>
          <div className={classes.editButton}>
            <Link
              //   href=''
              href={{
                pathname: '/editblog',
                query: { userId, id, title, body },
              }}
              passHref>
              <ButtonGroup disableElevation variant='contained' size='small'>
                <Tooltip title='EDIT POST' placement='top' arrow>
                  <Button component='a' color='secondary'>
                    <EditIcon color='inherit' />
                  </Button>
                </Tooltip>
                <Tooltip title='DISCARD POST' placement='top' arrow>
                  <Button color='inherit' className={classes.delicon}>
                    <DeleteForeverOutlinedIcon  color='secondary'/>
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </Link>
          </div>
        </Grid>
      </Grid>
      <Typography variant='body1'>
        {body}
        {/* {body === undefined ? updatePost.editPost.content : body} */}
      </Typography>
    </>
  );
}

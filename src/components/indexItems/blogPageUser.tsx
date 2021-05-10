import useStyles from "../../helper/headStyles";
import {
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@material-ui/core";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useRouter } from 'next/router';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';

const userState = createSelector(
    (state: any) => state.users,
    (users) => users
  );
  
  const GetUserID = createSelector(
    (state: any) => state.users,
    (userId) => userId
  );



export default function BlogUserInfo(proops) {
    const classes = useStyles();
    const router = useRouter();
    const { userId, id, title, body } = router.query;

      //for select user
  const ToGetUsers = useSelector(userState);
  const ToGetUsersId = useSelector(GetUserID);

  const UserID = ToGetUsersId.userId;

  const userData = ToGetUsers.users.map((thisUser) => {
    const userInfo = thisUser.id == userId;
    return userInfo == true ? (
      <>
      <div>
        <Typography variant='body1' className={classes.avatarsInfo}>
        <b>{thisUser.name}</b>
        </Typography>
    </div>
    
       <Typography >

       <MailOutlineIcon fontSize="small" className={classes.avatarIcon} />
           <small> {thisUser.email}</small>
        </Typography>
        <Typography>
            <PhoneIcon  fontSize="small" className={classes.avatarIcon} />
            <small> {thisUser.phone}</small>
        </Typography>
        <Typography>
            <LanguageIcon fontSize="small" className={classes.avatarIcon} />
            <small> {thisUser.website}</small>
        </Typography>
      </>
    ) : null;
  });
    
    return (
    <>
    <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={4} xs={12}>
        {/* <Paper className={classes.paper}> */}
            <div className={classes.avatars}>
                
                <Avatar
                    alt='Reyomi'
                    style={{
                        width: '10rem',
                        height: '10rem',
                        color: '#fff',
                        backgroundColor: '#19857b',
                    }}
                />
               
            </div>
            {/* </Paper> */}
            {userData}
        </Grid>

        <Grid item lg={9} md={9} sm={8} xs={12}>
            <div className={classes.editButton}>
                <Avatar
                    variant='rounded'
                    style={{
                        width: '100%',
                        height: '20rem',
                        color: '#fff',
                        backgroundColor: '#eee',
                    }}>
                    Sample IMAGE
                </Avatar>
            </div>
        </Grid>
    </Grid>
            </>
    )
              
    

}
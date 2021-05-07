import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Button,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import useStyles from '../helper/headStyles';
import { getUserId, getUser } from '../redux/actions/userAction';
import { useRouter } from 'next/router';
import { dispatch } from 'rxjs/internal/observable/pairs';

const GetUser = createSelector(
  (state: any) => state.users,
  (users) => users
);


const GetUserID = createSelector(
  (state: any) => state.users,
  (userId) => userId
);

export default function DrawerItems() {
  const classes = useStyles();

  //for selectors
  const ToGetUsers = useSelector(GetUser);
  const ToGetUsersId = useSelector(GetUserID);

  // console.log(ToGetDefaultUsers.defaultUser);
  const IdUser = ToGetUsersId.userId;

  //state
  const [userId, setUserId] = useState(IdUser);
 

  //for dispatch
  const dispatch = useDispatch();
  const GetUsers = getUser();

  // to get userID
   const toGetUserId = (props) => {
      getUserId(props)
  }

  // console.log(defUser);

  useEffect(() => {
    setTimeout(() => {
      dispatch(GetUsers);
      // setUsers(ToGetUsers.users);
    }, 1000);
  }, [dispatch]);

  const userData = ToGetUsers.users.map((thisUser) => {
    const userInfo = thisUser.id == userId;
    return userInfo == true ? (
      <>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>{thisUser.name}</ListItemText>
        </ListItem>
        <ListItem>Username : {thisUser.username}</ListItem>
        <ListItem>Email : {thisUser.email}</ListItem>
        <ListItem>
          Address : {thisUser.address.street}, {thisUser.address.suite}, 
          {thisUser.address.city}, {thisUser.address.zipcode}, 
          {thisUser.address.geo.lat}, {thisUser.address.geo.lng}
        </ListItem>
        <ListItem>Phone : {thisUser.phone}</ListItem>
        <ListItem>Website : {thisUser.website}</ListItem>
        <ListItem>
          Company : {thisUser.company.name}, {thisUser.company.catchPhrase}, 
          {thisUser.company.bs}
        </ListItem>
      </>
    ) : null;
  });


  const userList = ToGetUsers.users.map((user, index) => (
    <ListItem >
      <ListItemIcon>
        {index % 2 === 0 ? <PermIdentityIcon /> : <AccountCircleIcon />}
      </ListItemIcon>
      <ListItemText>
        <Button
          /* @ts-ignore */
          onClick={() => {setUserId(`${user.id}`),toGetUserId(user.id) }}>
          {user.name}
        </Button>
      </ListItemText>
    </ListItem>
  ));



  return (
    <>
        <List>
         {userData}
      </List>

      <Divider />

      <List
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Nested Users
          </ListSubheader>
        }>
        {[userList]}
      </List>
    </>
  );
}

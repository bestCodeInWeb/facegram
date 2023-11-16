import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { follow, unfollow } from '../../api/people';
import { useAppDispatch } from '../../redux/hooks';
import { followAC, unfollowAC } from '../../redux/usersReducer';
import { UserInterface } from '../../types/interfaces';
import { defaultPhoto } from '../../utils/defaultPhoto';
import './Person.scss';

type Props = {
  user: UserInterface;
}

export const Person: React.FC<Props> = ({ user }) => {
  const [isProcesing, setIsProcesing] = useState(false);
  const dispatch = useAppDispatch();

  const followHandler = () => {
    setIsProcesing(true);

    follow(user.id)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followAC(user.id));
        }
      })
      .finally(() => {
        setIsProcesing(false);
      })
  }

  const unFollowHandler = () => {
    setIsProcesing(true);

    unfollow(user.id)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowAC(user.id));
        }
      })
      .finally(() => {
        setIsProcesing(false);
      })
    }

  return (
    <div className='user_container'>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <div>
            <img
              src={user.photos.small ? user.photos.small : defaultPhoto}
              className='users_photo'
              alt=''
            />
          </div>
        </NavLink>
  
        <div>
          {user.followed ? (
            <button
              className="btn btn-danger"
              onClick={unFollowHandler}
              disabled={isProcesing}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={followHandler}
              disabled={isProcesing}
            >
              Follow
            </button>
          )}
        </div>
      </div>
  
      <div className="users_description">
        <div className='user_info'>
          <NavLink to={'/profile/' + user.id} className='link_usename'>
            <div>
              <p><b>{user.name}</b></p>
            </div>
          </NavLink>
  
          <div>
            {!!user.status && (
              <p><b>Status:</b> {user.status}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

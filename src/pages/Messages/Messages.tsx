import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { DialogsList } from '../../components/DialogsList/DialogsList';
import { useAppSelector } from '../../redux/hooks';
import './Messages.scss';

export const Messages = () => {
  const [isFriends, setIsFriends] = useState(true);
  const isAuth = useAppSelector(state => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate replace to='/login' />
  }

  return (
    <div className="messages">
      {isFriends ? (
        <DialogsList />
      ) : (
        <div>
          Button to People page
        </div>
      )}
    </div>
  );
}

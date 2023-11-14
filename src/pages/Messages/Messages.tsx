import React, { useState } from 'react';
import { DialogsList } from '../../components/DialogsList/DialogsList';
import './Messages.scss';

export const Messages = () => {
  const [isFriends, setIsFriends] = useState(true);

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

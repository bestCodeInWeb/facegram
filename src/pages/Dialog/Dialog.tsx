import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { sendMessageAC } from '../../redux/friendsReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './Dialog.scss';

export const Dialog = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const user = useAppSelector(state => state.friends.items).find(u => u.id === userId);
  const [message, setMessage] = useState('');

  const onMessageHandler:React.ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    if (!!userId) {
      dispatch(sendMessageAC(message, userId, '2'));
      setMessage('');
    }
  }

  const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onMessageHandler(e as any);
    }
  }

  if (!user) {
    navigate('/not-found');
  }

  return (
    <div>
      <h1 className="text-center">{ user?.name }</h1>

      <div className="dialog">
        {user?.messages.map(m => (
          <div
            key={m.id}
            className={m.userId === '2' ? 'right_message message' : 'left_message message'}
          >
            <img
              src={
                m.userId === '2'
                  ? "https://ca.slack-edge.com/T0PE08HSR-U050ZTXD6KB-c54741a143ee-512"
                  : user.ava
              }
              className="message-user-ava"
              alt=""
            />
            {m.text}
          </div>
        ))}
      </div>

      <form className="send-message" onSubmit={onMessageHandler}>
        <textarea
          placeholder="Write a message..."
          className="mb10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={keyDownHandler}
        ></textarea>
  
        <button type="submit" className="btn btn-block btn-dark">
          Send a message
        </button>
      </form>
    </div>
  );
}

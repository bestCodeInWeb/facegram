import React from 'react';
import { useNavigate } from 'react-router';
import { DraggableProvided } from 'react-beautiful-dnd';
import './DialogItem.scss';
import { User } from '../../types/user';

type Props = {
  user: User;
  provided: DraggableProvided;
}

export const DialogItem: React.FC<Props> = ({ user, provided }) => {
  const navigate = useNavigate();

  const openDialogHandler = () => {
    navigate('/messages/' + user.id);
  }

  return (
    <div
      className="dialog-item"
      onClick={openDialogHandler}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <img
        src="https://ca.slack-edge.com/T0PE08HSR-U050ZTXD6KB-c54741a143ee-512"
        className="dialog-item__ava"
        alt=""
      />

      <div className="dialog-item__name">
        { user.name }
      </div>

      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-draggable-dots-3050352-2538270.png"
        className="dnd"
        alt=""
      />
    </div>
  );
}

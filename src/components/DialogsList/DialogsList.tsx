import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { setFriendsAC } from '../../redux/friendsReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { DialogItem } from '../DialogItem/DialogItem';
import './DialogsList.scss';

export const DialogsList = () => {
  const users = useAppSelector(state => state.friends.items);
  const dispatch = useAppDispatch();

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(users);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(setFriendsAC(items));
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="users">
        {(provided) => (
          <div
            className="dialog-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {users.map((user, index) => (
              <Draggable key={user.id} draggableId={user.id} index={index}>
                {(dragProvided) => (
                  <DialogItem
                  user={user}
                    provided={dragProvided}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

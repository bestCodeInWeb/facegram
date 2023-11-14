import React, { useState } from 'react';
import { useParams } from 'react-router';
import { PostType } from '../../types/user';
import { PostsList } from '../../components/PostsList/PostsList';
import { useAppDispatch } from '../../redux/hooks';
import { addPostAC } from '../../redux/postsReducer';
import './Profile.scss';

export const Profile = () => {
  const [postText, setPostText] = useState('');
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const publicPostHandler = () => {
    const newPost: Omit<PostType, 'id'> = {
      to: userId || '0',
      userId: '2',
      text: postText,
      likesCount: 0,
      isLike: false,
    };
    
    setPostText('');
    dispatch(addPostAC(newPost));
  }

  const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      publicPostHandler();
    }
  }

  return (
    <div className="profile">
      <div className="background-img">
        <div className="avatar"></div>

        <span className="btns">
          <button className="btn btn-danger">Change photo</button>
          <button className="btn btn-success">Edit profile</button>
        </span>
      </div>

      <div className="profile-container">
        <h1 className="profile-username">Alex Cheban</h1>

        <div className="info">
          Some info
        </div>

        <div className="posts-container">
          <textarea
            className="mb10"
            placeholder="Write post..."
            value={postText}
            onChange={e => setPostText(e.target.value)}
            onKeyDown={keyDownHandler}
          ></textarea>

          <button
            className="btn btn-block btn-success"
            onClick={publicPostHandler}
          >
            Public post
          </button>

          <PostsList />
        </div>
      </div>
    </div>
  );
}

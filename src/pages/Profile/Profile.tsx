import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PostType } from '../../types/user';
import { PostsList } from '../../components/PostsList/PostsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addPostAC } from '../../redux/postsReducer';
import './Profile.scss';
import { getProfile } from '../../api/profile';
import { setProfileAC } from '../../redux/profileReducer';
import { defaultPhoto } from '../../utils/defaultPhoto';
import { Loader } from '../../components/Loader/Loader';
import { EditProfileInfo } from '../../components/EditProfileInfo/EditProfileInfo';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { Status } from '../../components/Status/Status';

export const Profile = () => {
  const [postText, setPostText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const profile = useAppSelector(state => state.profile.item);
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const myId = useAppSelector(state => state.auth.userId);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);

      getProfile(+userId)
        .then((response) => {
          dispatch(setProfileAC(response.data));
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }, [userId]);

  const publicPostHandler = () => {
    if (!postText.trim()) {
      return;
    }
    
    const newPost: Omit<PostType, 'id'> = {
      to: userId || '0',
      userId: '25084',
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

  if (!profile || isLoading) {
    return <Loader />
  }

  return (
    <div className="profile">
      <div className="background-img">
        <img
          src={profile?.photos.small || defaultPhoto}
          className="avatar"
          alt=""
        />

        {isAuth && !!userId && +userId === myId && (
          <span className="btns">
            <button className="btn btn-danger">
              Change photo
            </button>
 
            {!isEditing && (
              <button className="btn btn-success" onClick={() => setIsEditing(true)}>
                Edit profile
              </button>
            )}
          </span>
        )}
      </div>

      <div className="profile-container">
        <h1 className="profile-username">
          {profile.fullName}
        </h1>

        <Status />

        {isEditing ? (
          <EditProfileInfo onClose={() => setIsEditing(false)} />
        ) : (
          <ProfileInfo />
        )}

        <div className="posts-container">
          <textarea
            className="mb10"
            placeholder="Write post..."
            value={postText}
            onChange={e => setPostText(e.target.value)}
            onKeyDown={keyDownHandler}
          ></textarea>

          <button
            className="btn btn-block btn-success mb10"
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

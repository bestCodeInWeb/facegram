import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../../redux/hooks';
import { Post } from '../Post/Post';
import './PostsList.scss';

export const PostsList = () => {
  const { userId } = useParams();
  const posts = useAppSelector(state => state.posts.items);
  const filteredPosts = userId ? posts.filter(post => post.to === userId) : posts;

  return (
    <div className="posts">
      {filteredPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

import React from 'react';
import { PostsList } from '../../components/PostsList/PostsList';
import { useAppSelector } from '../../redux/hooks';
import './News.scss';

export const News = () => {
  const posts = useAppSelector(state => state.posts.items);

  if (!posts.length) {
    return <h1 className="text-center">There are no posts yet</h1>
  }

  return (
    <div className="news">
      <div className="news-container">
        <PostsList />
      </div>
    </div>
  );
}

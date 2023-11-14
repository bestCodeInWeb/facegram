import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { updatePostsAC } from '../../redux/postsReducer';
import { PostType } from '../../types/user';
import './Post.scss';

type Props = {
  post: PostType;
}

export const Post: React.FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();
  const likeSrc = post.isLike
    ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/120px-Heart_icon_red_hollow.svg.png";

  const likeHandler = () => {
    const updatedPost = {
      ...post,
      isLike: !post.isLike,
    }

    if (!post.isLike) {
      updatedPost.likesCount = updatedPost.likesCount + 1;
    } else {
      updatedPost.likesCount = updatedPost.likesCount - 1;
    }

    dispatch(updatePostsAC(updatedPost));
  }

  return (
    <div className="post">
      <div className="post__main">
        <img
          src="https://ca.slack-edge.com/T0PE08HSR-U050ZTXD6KB-c54741a143ee-512" // create userReducer
          className="post__ava"
          alt=""
        />

        <span className="post_username">Alex Cheban</span> 
      </div>

      <div className="post_text">
        <p>{ post.text }</p>
      </div>

      <div className="post__action_container">
        <div className="post__action" onClick={likeHandler}>
          {!!post.likesCount && post.likesCount}&nbsp;
          <img
            src={likeSrc}
            className="like-icon"
            alt=""
          />
        </div>
        <div className="post__action" onClick={() => {}}>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/website-icon/comment-133.png"
            className="comment-icon"
            alt=""
          />&nbsp;
          {/* {post.comments.length}&nbsp; */}
        </div>
        <div className="post__action">
          <img
            src="https://e7.pngegg.com/pngimages/32/955/png-clipart-computer-icons-share-icon-icon-design-shares-angle-triangle.png"
            className="share-icon"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

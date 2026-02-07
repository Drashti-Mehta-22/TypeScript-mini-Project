import React from "react";
import type { LikeButtonProps } from "../type-index";

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onLike }) => {
  return (
    <button
      onClick={onLike}
      style={{
        fontSize: '24px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '5px',
        transition: 'transform 0.2s ease',
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.9)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {isLiked ? '👍🏻' : '👍🏽'}
    </button>
  );
};

export default LikeButton;
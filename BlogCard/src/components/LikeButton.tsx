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
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.2)';  // ✨ Bigger on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';    // ✨ Back to normal
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.9)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1.3)';
        setTimeout(() => {
          if (e.currentTarget) {
            e.currentTarget.style.transform = 'scale(1)';  // ✨ Back to normal after 200ms
          }
        }, 200)
      }}
    >
      {isLiked ? '❤️' : '🩶'}
    </button>
  );
};

export default LikeButton;
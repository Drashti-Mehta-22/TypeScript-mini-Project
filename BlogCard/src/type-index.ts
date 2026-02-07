export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface CardProps {
  children: React.ReactNode;
}

export interface BadgeProps {
  text: string;
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray';
}

export interface LikeButtonProps {
  isLiked: boolean;
  onLike: () => void;
}

export interface BlogPost {
  id: number;
  category: string;
  categoryColor: 'blue' | 'red' | 'green' | 'yellow';
  title: string;
  description: string;
  readTime: string;  // 5 min read"
  isLiked: boolean; 
}
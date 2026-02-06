export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface CardProps {
  children: React.ReactNode;
}

export interface BadgeProps {
  text: string;
  color?: 'blue' | 'red' | 'green' | 'yellow';
}
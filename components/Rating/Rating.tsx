import { FC } from 'react';

interface RatingProps {
  value: number;
  max?: number;
}

const Rating: FC<RatingProps> = ({ value, max = 5 }) => {
  return (
    <span>
      {[...Array(max)].map((_, i) => (
        <span key={i} style={{ color: i < value ? '#FFD600' : '#E0E0E0', fontSize: 18 }}>★</span>
      ))}
    </span>
  );
};

export default Rating;





import { useContext } from 'react';
import { LikeContext } from '../context/likeContext';

export default function useLike() {
  const value = useContext(LikeContext);
  return value;
}
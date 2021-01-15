import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Container } from './styles';

const StarRating: React.FC = () => {
  const [star, setStar] = useState();
  return (
    <Container>
      <FaStar size={20} color="#ffc700" />
      <FaStar size={20} color="#ffc700" />
      <FaStar size={20} color="#ffc700" />
      <FaStar size={20} color="#ffc700" />
      <FaStar size={20} color="#ffc700" />
    </Container>
  );
};

export default StarRating;

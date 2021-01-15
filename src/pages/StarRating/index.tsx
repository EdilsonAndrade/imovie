import React, { useState, useCallback } from 'react';
import { FaStar } from 'react-icons/fa';
import { Container } from './styles';
import { useMovie } from '../../hooks/movie';

interface IStar{
  id:number;
  checked:boolean;
}
const StarRating: React.FC = () => {
  const { filterByRate } = useMovie();

  const stars = useCallback(() => [{ id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false },
    { id: 5, checked: false },
  ], []);

  const [starData, setStarData] = useState<IStar[]>(stars);
  const handleStarClick = useCallback((id:number, checked:boolean) => {
    const changedStars = starData.map((s:IStar) => {
      if (s.id <= id) {
        return {
          ...s,
          checked: s.id === id ? !checked : true,
        };
      }
      return {
        ...s,
        checked: false,
      };
    });
    setStarData(changedStars);
    let idToSearch = 0;
    changedStars.forEach((s) => {
      if (s.checked === true) {
        idToSearch = s.id;
      }
    });

    filterByRate(idToSearch);
  }, [filterByRate, starData]);

  return (
    <Container>
      {starData.map((s) => {
        if (s.checked) {
          return (<FaStar key={s.id} size={20} color="#ffc700" onClick={() => handleStarClick(s.id, s.checked)} />);
        }
        return (<FaStar key={s.id} size={20} color="#fff" onClick={() => handleStarClick(s.id, s.checked)} />);
      })}

    </Container>
  );
};

export default StarRating;

import React, { useEffect, useCallback, useState } from 'react';
import { IMovieData, useMovie } from '../../hooks/movieHooks';
import CardPreview from '../CardPreview';

import { Container, GridContainer } from './styles';

const Discover: React.FC = () => {
  const { getMovies, movie } = useMovie();
  const [movies, setMovies] = useState<IMovieData[]>();

  const loadMovies = useCallback(async () => {
    await getMovies();
  }, [getMovies]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  useEffect(() => {
    setMovies(movie);
  }, [movie]);

  const showDetailCard = useCallback((id:number) => {
    const updatedMovies: IMovieData[] = [];
    movies?.forEach((m) => {
      if (id === m.id) {
        updatedMovies.push({
          ...m,
          showDetail: !m.showDetail,
        });
      } else {
        updatedMovies.push({
          ...m,
          showDetail: false,
        });
      }
      setMovies(updatedMovies);
    });
  }, [movies]);

  return (
    <Container>
      <GridContainer>
        {movies?.map((m) => (
          <CardPreview
            onClick={() => showDetailCard(m.id)}
            showDetail={m.showDetail}
            key={m.id}
            coverImage={m.poster_path}
            previewImage={m.backdrop_path}
            movie={m}
          />
        ))}

      </GridContainer>
    </Container>
  );
};

export default Discover;

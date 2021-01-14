import React, { useEffect, useCallback } from 'react';
import { useMovie } from '../../hooks/movieHooks';
import CardPreview from '../CardPreview';

import { Container, GridContainer } from './styles';

const Discover: React.FC = () => {
  const { getMovies, movie } = useMovie();

  const loadMovies = useCallback(async () => {
    await getMovies();
  }, [getMovies]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <Container>
      <GridContainer>
        {movie?.map((m) => (
          <CardPreview
            key={m.title}
            coverImage={m.poster_path}
            previewImage={m.backdrop_path}
            title={m.title}
            overView={m.overview}
            voteAverage={m.vote_average}
            voteCount={m.vote_count}
          />
        ))}

      </GridContainer>
    </Container>
  );
};

export default Discover;

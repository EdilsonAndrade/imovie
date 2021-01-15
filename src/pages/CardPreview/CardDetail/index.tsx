import React from 'react';
import {
  Container,
  BackDropImage, BottomContainer, Title, OverViewContainer, VoteContainer, ReleaseDate,
  VoteCotent, AverageVote,
} from './styles';
import { IMovieData } from '../../../hooks/movieHooks';

interface CardDetail {
  urlImage: string;
  visible: boolean;
  movie:IMovieData;
}
const CardDetail: React.FC<CardDetail> = ({
  urlImage, visible = false, movie,
}: CardDetail) => (
  <Container
    visible={visible}
  >
    <BackDropImage src={urlImage} alt={movie.title} />
    <BottomContainer>
      <Title>
        {movie.title}
      </Title>
      <OverViewContainer>
        {movie.overview}
      </OverViewContainer>

    </BottomContainer>
    <VoteContainer>
      <VoteCotent>
        {movie.vote_count}
      </VoteCotent>
      <ReleaseDate>
        {movie.release_date}
      </ReleaseDate>
      <AverageVote>
        {movie.vote_average}
      </AverageVote>
    </VoteContainer>
  </Container>
);

export default CardDetail;

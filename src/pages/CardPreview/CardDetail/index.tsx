import React from 'react';
import {
  Container,
  BackDropImage, BottomContainer, Title, OverViewContainer, VoteContainer,
  ReleaseDate,
  VoteCotent, AverageVote,
} from './styles';
import { IMovieData } from '../../../hooks/movie';

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
        <span>Votes</span>
        {movie.vote_count}
      </VoteCotent>

      <ReleaseDate>
        {movie.release_date}
      </ReleaseDate>

      <AverageVote>
        <span>Average</span>
        {movie.vote_average}
      </AverageVote>

    </VoteContainer>
  </Container>
);

export default CardDetail;

import React from 'react';
import {
  Container,
  BackDropImage, TitleSummaryContainer, Title, OverViewContainerText, VoteContainer,
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
    <TitleSummaryContainer>
      <Title>
        {movie.title}
      </Title>
      <OverViewContainerText>
        {movie.overview}
      </OverViewContainerText>

    </TitleSummaryContainer>
    <VoteContainer>

      <VoteCotent>
        <span>Votes</span>
        <span>{movie.vote_count}</span>
      </VoteCotent>

      <ReleaseDate>
        <span>{movie.release_date}</span>
      </ReleaseDate>

      <AverageVote>
        <span>Average</span>
        <span>{movie.vote_average}</span>

      </AverageVote>

    </VoteContainer>
  </Container>
);

export default CardDetail;

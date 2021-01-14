import React from 'react';
import {
  Container,
  BackDropImage, BottomContainer, Title, OverViewContainer, VoteContainer,
  VoteCotent, AverageVote,
} from './styles';

interface CardDetail {
  urlImage: string;
  title: string;
  visible: boolean;
  voteAverage: number;
  voteCount: number;
  overView: string;
}
const CardDetail: React.FC<CardDetail> = ({
  urlImage, title, visible = false, voteAverage = 0, voteCount = 0, overView,
}: CardDetail) => (
  <Container
    visible={visible}
  >
    <BackDropImage src={urlImage} alt={title} />
    <BottomContainer>
      <Title>
        {title}
      </Title>
      <OverViewContainer>
        {overView}
      </OverViewContainer>
      <VoteContainer>
        <VoteCotent>
          {voteCount}
        </VoteCotent>
        <AverageVote>
          {voteAverage}
        </AverageVote>
      </VoteContainer>
    </BottomContainer>
  </Container>
);

export default CardDetail;

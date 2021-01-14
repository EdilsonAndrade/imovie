import React from 'react';
import {
  Container, BackDropImage, SmokeTitle, Title,
} from './styles';

interface CardDetail {
  urlImage: string;
  title: string;
  visible: boolean;
}
const CardDetail: React.FC<CardDetail> = ({
  urlImage, title, visible = false,
}: CardDetail) => (
  <Container
    visible={visible}
  >
    <BackDropImage src={urlImage} alt={title} />
    <SmokeTitle>
      <Title>
        {title}
      </Title>
    </SmokeTitle>
  </Container>
);

export default CardDetail;

import React, { useEffect, useState } from 'react';
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
}: CardDetail) => {
  const [showMe, setShowMe] = useState<boolean>(false);

  useEffect(() => {
    setShowMe(visible);
  }, [visible]);

  return (
    <Container visible={showMe} onMouseOut={() => setShowMe(false)}>
      <BackDropImage src={urlImage} alt={title} />
      <SmokeTitle>
        <Title>
          {title}
        </Title>
      </SmokeTitle>
    </Container>
  );
};

export default CardDetail;

import React, { useState, useEffect } from 'react';
import NoImageAvailable from '../../assets/noimage.png';
import {
  MainContainer, PreviewContainer, BackDropImage, SmokeTitle, Title,
} from './styles';

import CardDetail from './CardDetail';

interface CardPreview {
  previewImage: string;
  coverImage: string;
  title: string;
}
const CardPreview: React.FC<CardPreview> = ({ previewImage, coverImage, title }: CardPreview) => {
  const [showDetail, setShowDetail] = useState(false);
  const [image, setImage] = useState('');
  const [postImage, setPostImage] = useState('');

  useEffect(() => {
    if (previewImage) {
      setImage(`${process.env.REACT_APP_IMAGE_PATH}${previewImage}`);
      return;
    }
    setImage(NoImageAvailable);
  }, [previewImage]);

  useEffect(() => {
    if (coverImage) {
      setPostImage(`${process.env.REACT_APP_IMAGE_PATH}${coverImage}`);
      return;
    }
    setImage(NoImageAvailable);
  }, [coverImage]);
  return (
    <MainContainer
      onClick={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}

    >
      <PreviewContainer>
        <BackDropImage src={image} alt={title} />
        <SmokeTitle>
          <Title>
            {title}
          </Title>
        </SmokeTitle>
      </PreviewContainer>
      <CardDetail visible={showDetail} urlImage={postImage} title={title} />
    </MainContainer>
  );
};

export default CardPreview;

import React, { useState, useEffect } from 'react';
import NoImageAvailable from '../../assets/noimage.png';
import {
  MainContainer, PreviewContainer, BackDropImage, SmokeTitle, Title,
} from './styles';
import { IMovieData } from '../../hooks/movie';
import CardDetail from './CardDetail';

interface CardPreview {
  previewImage: string;
  coverImage: string;
  movie:IMovieData;
  onClick():void;
  showDetail:boolean;
}
const CardPreview: React.FC<CardPreview> = ({
  previewImage, coverImage, movie, onClick, showDetail,
}: CardPreview) => {
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
      onClick={() => onClick()}
    >
      <PreviewContainer>
        <BackDropImage src={image} alt={movie.title} />
        <SmokeTitle>
          <Title>
            {movie.title}
          </Title>
        </SmokeTitle>
      </PreviewContainer>
      <CardDetail
        visible={showDetail}
        urlImage={postImage}
        movie={movie}
      />
    </MainContainer>
  );
};

export default CardPreview;

import styled from 'styled-components';

interface ImageProps {
  imageUrl: string;
  imageTitle: string;
};

const StyledImage = styled.img`
  vertical-align: middle;
  width: 100%;
  height: auto;
`;

const ImageComponent = ({ imageUrl, imageTitle }: ImageProps) => {
  return (
    <StyledImage src={imageUrl} alt={imageTitle}/>
  )
};

export default ImageComponent;

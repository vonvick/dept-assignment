import styled from 'styled-components';

interface ImageProps {
  imageUrl: string;
  imageTitle: string;
  width?: string;
};

const StyledImage = styled.img`
  vertical-align: middle;
  width: ${ props => props.width ? props.width : '100%' };
  height: auto;
`;

const ImageComponent = ({ imageUrl, imageTitle, width }: ImageProps) => {
  return (
    <StyledImage src={imageUrl} alt={imageTitle} width={width}/>
  )
};

export default ImageComponent;

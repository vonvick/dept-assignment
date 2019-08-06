import styled from 'styled-components';

// components
import ImageComponent from '../ImageComponent';

export interface CardProps {
  imageName: string;
  client: string;
  title: string;
};

const StyledCard = styled.div`
  .image-container {
    height: 350px;
    overflow: hidden;
  }
  .case-client{
    color: #B0ABA3;
    p {
      font-family: 'MaisonNeue', sans-serif;
      margin: 10px 0;
      font-weight: 700;
      font-size: 15px;
      line-height: 2;
    }
  }
  .case-title {
    p {
      font-size: 30px;
      margin: 10px 0;
      line-height: 1.07;
    }
  }

  .case-action {
    font-family: 'MaisonNeue', sans-serif;
    .view-case {
      color: #1a18f7;
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

const CardComponent = ({ imageName, client, title }: CardProps) => {
  const imageUrl = `../../static/Images/${imageName}.png`
  return (
    <StyledCard>
      <div className="image-container">
        <ImageComponent imageUrl={imageUrl} imageTitle={client}/>
      </div>
      <div className="card-description">
        <div className="case-client"><p>{client}</p></div>
        <div className="case-title"><p>{title}</p></div>
        <div className="case-action">
          <span></span>
          <span className="view-case">VIEW CASE</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default CardComponent;

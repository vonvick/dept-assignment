import styled from 'styled-components';
import { CardProps } from '../CardComponent';
import React, { useEffect, useState } from 'react';

// components
import RowContainer from '../RowContainer';
import ColumnContainer from '../ColumnContainer';
import CardComponent from '../CardComponent';

interface GridProps {
  cases: CardProps[];
  displayValue: string,
}

const StyledGridContainer = styled.div`
  .other-cases {
    display: flex;
    flex-direction: column;
  }
`;

const GridComponent = ({ cases, displayValue }: GridProps) => {
  const [selectedDisplayValue, setSelectedDisplayValue] = useState(6)

  useEffect(() => {
    const value = displayValue === 'grid' ? 6 : 12;
    setSelectedDisplayValue(value);
  }, [displayValue]);

  const casesDisplay = (items: any) => {
    return items.map((item: any, index: number) => {
      const { imageName, client, title } = item;
      return (
        <ColumnContainer md={selectedDisplayValue} sm={12} key={index}>
          <CardComponent
            imageName={imageName}
            client={client.toUpperCase()}
            title={title}/>
        </ColumnContainer>
      );
    });
  };

  const firstCasesList = casesDisplay(cases.slice(0, 4));
  const secondCasesList = casesDisplay(cases.slice(5, 7));
  const thirdCasesList = casesDisplay(cases.slice(7, 11));
  const fourthCasesList = casesDisplay(cases.slice(11, 13));

  return (
    <div className="container">
      <RowContainer>
        {firstCasesList}
      </RowContainer>
      <RowContainer>
        {secondCasesList}
      </RowContainer>
      <RowContainer>
        {thirdCasesList}
      </RowContainer>
      <RowContainer>
        {fourthCasesList}
      </RowContainer>
    </div>
  );
};

export default GridComponent;

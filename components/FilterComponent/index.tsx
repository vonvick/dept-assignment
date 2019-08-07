import styled from 'styled-components';

const StyledFilter = styled.div`
  margin: 100px 0 50px 0;
  .filter-wrapper {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 900px) {
      justify-content: flex-end;
      flex-direction: row;
    }
    .category-filter {
      margin-right: 20px;
    }
  }
`;

interface FilterProps {
  industries: string[],
  categories: string[]
}

const FilterComponent = (props: FilterProps) => {
  const { industries, categories } = props;

  return (
    <StyledFilter>
      <div className="container">
        <div className="filter-wrapper">
          <div className="category-filter">
            <span className="category-text">Show me</span>
            <span className="category-text"></span>
          </div>
          <div className="industry-filter">
            <span className="category-text">in</span>
            <span className="category-text"></span>
          </div>
        </div>
      </div>
    </StyledFilter>
  );
};

export default FilterComponent;

import styled from 'styled-components';
import React, { useState } from 'react';

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
  categories: string[],
  handleFilterChange: (value: string, type: string) => void,
}

const FilterComponent = (props: FilterProps) => {
  const { industries, categories, handleFilterChange } = props;

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')

  const updateFilterQuery = (value: string, type: string) => {
    switch(type) {
      case 'category':
        setSelectedCategory(value);
        break;
      case 'industry':
        setSelectedIndustry(value)
        break;
      default:
        return;
    }

    handleFilterChange(value, type);
  }

  return (
    <StyledFilter>
      <div className="container">
        <div className="filter-wrapper">
          <div className="category-filter">
            <span className="category-text">Show me </span>
            <span className="category-text">
              <select
                value={selectedCategory}
                onChange={(event: any) => updateFilterQuery(event.target.value, 'category')}>
                <option value="">All Categories</option>
                { categories.map((category, index) => {
                  return (
                    <option value={category} key={index}>{category}</option>
                  )
                })}
              </select>
            </span>
          </div>
          <div className="industry-filter">
            <span className="category-text">in </span>
            <span className="category-text">
              <select
                value={selectedIndustry}
                onChange={(event: any) => updateFilterQuery(event.target.value, 'industry')}>
                <option value="">All Industries</option>
                { industries.map((industry, index) => {
                  return (
                    <option value={industry} key={index}>{industry}</option>
                  )
                })}
              </select>
            </span>
          </div>
        </div>
      </div>
    </StyledFilter>
  );
};

export default FilterComponent;

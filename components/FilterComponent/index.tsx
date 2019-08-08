import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import Image from '../ImageComponent';
import ColumnContainer from '../ColumnContainer'
import RowContainer from '../RowContainer'

const StyledFilter = styled.div`
  margin: 120px 0 20px 0;
  .filter-row {
    margin-top: 20px;
  }
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

  .display-wrapper {
    cursor: pointer;
    .view-control {
      margin-right: 20px;
      height: 30px;
      width: 30px;
    }
  }
`;

interface FilterProps {
  industries: string[],
  categories: string[],
  filterCategory: string,
  filterIndustry: string,
  handleFilterChange: (value: string, type: string) => void,
  changeDisplayView: (value: string) => void,
}

const FilterComponent = (props: FilterProps) => {
  const {
    industries,
    categories,
    filterCategory,
    filterIndustry,
    handleFilterChange,
    changeDisplayView
  } = props;

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')

  const updateFilterQuery = (value: string, type: string) => {
    handleFilterChange(value, type);
  }

  useEffect(() => {
    setSelectedCategory(filterCategory);
    setSelectedIndustry(filterIndustry);
  });

  return (
    <StyledFilter>
      <div className="container filter-row">
        <RowContainer>
          <ColumnContainer md={6} sm={12}>
            <div className="display-wrapper">
              <span className="view-control" onClick={() => changeDisplayView('grid')}>
                <Image imageUrl='/static/svg/menu.svg' imageTitle='grid icon' width="30px"/>
                &nbsp;
                Grid View
              </span>
              <span className="list-view" onClick={() => changeDisplayView('list')}>
                <Image imageUrl='/static/svg/list.svg' imageTitle='list icon' width="30px"/>
                &nbsp;
                List View
              </span>
            </div>
          </ColumnContainer>
          <ColumnContainer md={6} sm={12}>
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
                        <option
                          value={category}
                          key={index}>
                          {category}
                        </option>
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
                        <option
                          value={industry}
                          key={index}>
                          {industry}
                        </option>
                      )
                    })}
                  </select>
                </span>
              </div>
            </div>
          </ColumnContainer>
        </RowContainer>
      </div>
    </StyledFilter>
  );
};

export default FilterComponent;

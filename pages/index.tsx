import React, { useEffect, useState } from 'react'
import Router from 'next/router';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { getCasesData, performDataFilter } from '../store/actions';
import Layout from '../components/Layout';
import Head from '../components/Head';
import CardGridComponent from '../components/CardGridComponent';
import FilterComponent from '../components/FilterComponent';
import {NextPageContextWithRedux} from './_app'

import { getFilteredCases } from '../store/global/reducer';

// types
import { AppState } from '../types/state';
import { IndexPageProps } from '../types/page';
// import console = require('console');

const IndexPage = (props: IndexPageProps) => {
  const {
    industries,
    categories,
    cases,
    error,
    loading,
    performDataFilter,
    filtersApplied
  } = props;

  useEffect(() => {
    Router.push({
      pathname: '/',
      query: filtersApplied
    })
  }, [filtersApplied])

  const [displayValue, setDisplayValue] = useState('grid');

  return (
    <Layout>
      <Head />
      <div className="cases-container">
        <FilterComponent
          industries={industries}
          categories={categories}
          changeDisplayView={setDisplayValue}
          filterCategory={filtersApplied.category}
          filterIndustry={filtersApplied.industry}
          handleFilterChange={performDataFilter}/>
        <CardGridComponent cases={cases} displayValue={displayValue}/>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async({
  reduxStore: {
    dispatch
  }}: NextPageContextWithRedux) => {
  await dispatch(getCasesData())

  return {};
}

const mapStateToProps = ((state: AppState) => {
  return {
    ...state.global,
    cases: getFilteredCases(state)
  };
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  performDataFilter: (value: string, type: string): Promise<any> =>
    dispatch(performDataFilter({ value, type }) as any)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

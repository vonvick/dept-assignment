import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { getCasesData, performDataFilter } from '../store/actions';
import Layout from '../components/Layout';
import Head from '../components/Head';
import CardGridComponent from '../components/CardGridComponent';
import FilterComponent from '../components/FilterComponent';
import {NextPageContextWithRedux} from './_app'

import { AppState, getFilteredCases } from '../store';

interface IndexPageProps {
  industries: string[],
  categories: string[],
  cases: any[],
  error: string,
  loading: boolean,
  performDataFilter: (value: string, type: string) => Promise<any>
}

const IndexPage = (props: IndexPageProps) => {
  const { industries, categories, cases, error, loading, performDataFilter } = props;

  return (
    <Layout>
      <Head />
      <div className="cases-container">
        <FilterComponent
          industries={industries}
          categories={categories}
          handleFilterChange={performDataFilter}/>
        <CardGridComponent cases={cases}/>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async({ reduxStore }: NextPageContextWithRedux) => {
  await reduxStore.dispatch(getCasesData())
  return {};
}

const mapStateToProps = ((state: AppState) => {
  return {
    ...state,
    cases: getFilteredCases(state),
  };
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  performDataFilter: (value: string, type: string): Promise<any> => {
    return dispatch(performDataFilter({ value, type }) as any)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

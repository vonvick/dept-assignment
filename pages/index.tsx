import React from 'react'
import { connect } from 'react-redux'
import { getCasesData } from '../store/actions';
import Layout from '../components/Layout';
import Head from '../components/Head';
import CardGridComponent from '../components/CardGridComponent';
import FilterComponent from '../components/FilterComponent';
import {NextPageContextWithRedux} from './_app'

import { AppState } from '../store';

const IndexPage = (props: AppState) => {
  const { industries, categories, cases, error, loading } = props;

  return (
    <Layout>
      <Head />
      <div className="cases-container">
        <FilterComponent industries={industries} categories={industries}/>
        <CardGridComponent cases={cases}/>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async({ reduxStore }: NextPageContextWithRedux) => {
  reduxStore.dispatch(getCasesData())
}



const mapDispatchToProps = { getCasesData }
const mapStateToProps = (state: AppState) => {
  return state;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

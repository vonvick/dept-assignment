import React from 'react'
import { connect } from 'react-redux'
import { filterCases } from '../store';
import Layout from '../components/Layout';
import Head from '../components/Head';
import CardGridComponent from '../components/CardGridComponent';
import FilterComponent from '../components/FilterComponent';

import data from '../db.json';

const Index = () => {
  return (
    <Layout>
      <Head />
      <div className="cases-container">
        <FilterComponent />
        <CardGridComponent cases={data.data}/>
      </div>
    </Layout>
  );
};

const mapDispatchToProps = { filterCases }
export default connect(
  null,
  mapDispatchToProps
)(Index)

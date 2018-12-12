import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import Header from '../../../components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      members: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />

        <section className="container">
          <h1>Boilerplate ready</h1>
        </section>
      </div>
    );
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: () =>
      dispatch(console.info('Loading')), // eslint-disable-line no-console
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

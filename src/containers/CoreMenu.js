import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';
import fetchVersions, { NAME as versionName } from '../actions/version';
import CoreMenuComponent from '../components/CoreMenu';

const mapStateToProps = state => {

  const { [versionName]: versions } = state;

  return { versions };
};

class CoreMenu extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    version: PropTypes.any.isRequired,
    versions: PropTypes.array.isRequired,
    summary: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
  }

  render() {

    const { version, versions, summary, location: { pathname } } = this.props;

    return (
      <CoreMenuComponent {...{ version, versions, summary, pathname }} />
    );
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchVersions());
  }
}

export default withRouter(
  connect(mapStateToProps)(CoreMenu)
);

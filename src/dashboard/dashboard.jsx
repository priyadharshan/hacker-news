import React, { Component } from 'react';

export class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div>Dashboard</div>
    );
  }
}

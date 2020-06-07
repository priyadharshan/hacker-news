import React, { Component } from 'react';
import {News} from './news'
import './dashboard.css'

export class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    console.log(this.props.loading)
    console.log(this.props.news)
    return (
      <div>
      <News news={this.props.news} />
      </div>
    );
  }
}

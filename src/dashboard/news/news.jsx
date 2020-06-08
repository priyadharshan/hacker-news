import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { Header } from './header'
import { Details } from './details'

import './news.css'

export class News extends Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table className="" aria-label="hacker news">
          <Header />
          <TableBody>
            {this.props.news.map((row) => 
              <Details
                number={row.created_at_i}
                createdAt={row.created_at}
                comments={row.num_comments}
                votes={row.points}
                title={row.title}
                url={row.url}
                author={row.author}
                hide={row.hide}
                hideItem={this.props.hideItem}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

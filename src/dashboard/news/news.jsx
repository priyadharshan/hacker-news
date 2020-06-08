import React, { memo } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { Header } from './header'
import { Details } from './details'

import './news.css'

export const News = memo((props) => (
      <TableContainer component={Paper}>
        <Table className="" aria-label="hacker news">
          <Header />
          <TableBody>
            {props.news.map((row) => 
              <Details
                number={row.created_at_i}
                createdAt={row.created_at}
                comments={row.num_comments}
                votes={row.points}
                title={row.title}
                url={row.url}
                author={row.author}
                hideItem={props.hideItem}
                upVote={props.upVote}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
))

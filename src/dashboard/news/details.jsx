import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

export class Details extends Component {
  render() {
    const {
        number,
        createdAt,
        comments,
        votes,
        title,
        url,
        author,
    } = this.props

    const hostname = (new URL(url)).hostname;
    const time = moment(createdAt).fromNow();

    return (
            <TableRow key={number}>
              <TableCell>{comments}</TableCell>
              <TableCell>{votes}</TableCell>
              <TableCell>{'icon'}</TableCell>
              <TableCell>
                {title} 
                ({hostname}) 
                by
                {author} 
                {time}</TableCell>
            </TableRow>
          )
  
  }
}

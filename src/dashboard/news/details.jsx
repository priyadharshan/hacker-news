import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import moment from 'moment';
import { getHostname } from '../../utils'

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

    const hostname = getHostname(url);
    const time = createdAt && moment(createdAt).fromNow();

    return (
            <TableRow key={number}>
              <TableCell>{comments}</TableCell>
              <TableCell>{votes}</TableCell>
              <TableCell><ArrowDropUpIcon /></TableCell>
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

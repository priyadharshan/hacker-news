import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import moment from 'moment';
import { getHostname } from '../../utils'
import './news.css'

export const Details = (props) => {
    const {
      number,
      createdAt,
      comments,
      votes,
      title,
      url,
      author,
    } = props

    const hostname = getHostname(url);
    const time = createdAt && moment(createdAt).fromNow();
    const additionalDetails = ` (${hostname}) by ${author} ${time}`

    return (
      <TableRow key={number} className="row">
        <TableCell>{comments}</TableCell>
        <TableCell>{votes}</TableCell>
        <TableCell><ArrowDropUpIcon /></TableCell>
        <TableCell>
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          <span className="details">{additionalDetails}</span>
        </TableCell>
      </TableRow>
    )
}

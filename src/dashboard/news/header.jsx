import React, { memo } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import './news.css'

export const Header = memo(() => (
  <TableHead className="header">
    <TableRow>
      <TableCell>Comments</TableCell>
      <TableCell>Vote Count</TableCell>
      <TableCell>UpVote</TableCell>
      <TableCell>News Details</TableCell>
    </TableRow>
  </TableHead>
))
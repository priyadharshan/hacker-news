import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Header = () => (
    <TableHead>
    <TableRow>
      <TableCell>Comments</TableCell>
      <TableCell>Vote Count</TableCell>
      <TableCell>UpVote</TableCell>
      <TableCell>News Details</TableCell>
    </TableRow>
  </TableHead>
)
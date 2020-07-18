import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function Candidates({ list }) {
  return (
    <Table aria-label="simple table">
      <a href="/candidate/signup">Add candidate</a>
      <TableHead>
        <TableRow>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Password</TableCell>
          <TableCell align="right">Type</TableCell>
          <TableCell align="right">User Type</TableCell>
          <TableCell align="right">Profile Image</TableCell>
          <TableCell align="right">Created at</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map(row => (
          <TableRow key={row.name}>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.password}</TableCell>
            <TableCell align="right">{row.type}</TableCell>
            <TableCell align="right">{row.user_type}</TableCell>
            <TableCell align="right">{row.image}</TableCell>
            <TableCell align="right">{row.created}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
Candidates.getInitialProps = async () => {
  const resp = await fetch("http://localhost:3001/api/candidate");
  const json = await resp.json();
  return { list: json };
};

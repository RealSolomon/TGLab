import React from "react";
import {
  TableContainer,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
} from "./styles";

const Table = ({ data }) => {
  const sortedData = data.slice().sort((a, b) => b.points - a.points);

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableCell>Place</TableCell>
          <TableCell>Team</TableCell>
          <TableCell>Played</TableCell>
          <TableCell>Win</TableCell>
          <TableCell>Draw</TableCell>
          <TableCell>Lost</TableCell>
          <TableCell>Points</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.length > 0 ? (
          sortedData.map(({ team, played, win, draw, lost, points }, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{team}</TableCell>
              <TableCell>{played}</TableCell>
              <TableCell>{win}</TableCell>
              <TableCell>{draw}</TableCell>
              <TableCell>{lost}</TableCell>
              <TableCell>{points}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>No data</TableCell>
            <TableCell>No data</TableCell>
            <TableCell>No data</TableCell>
            <TableCell>No data</TableCell>
            <TableCell>No data</TableCell>
            <TableCell>No data</TableCell>
            <TableCell>No data</TableCell>
          </TableRow>
        )}
      </TableBody>
    </TableContainer>
  );
};

export default Table;

import React from "react";
import { useSelector } from "react-redux";
import { teams } from "./store/selectors";
import Table from "./components/table";
import NewTeam from "./components/newTeam";
import Results from "./components/results";
import { Container, TableWrapper } from "./styles/styles";

const App = () => {
  const teamsTable = useSelector(teams);

  return (
    <Container>
      <NewTeam />
      <TableWrapper>
        <Table data={teamsTable} />
        <Results />
      </TableWrapper>
    </Container>
  );
};

export default App;

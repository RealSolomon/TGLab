import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matches, results } from "../../store/selectors";
import {
  submitResult,
  updateFirstTeam,
  updateSecondTeam,
} from "../../store/slice";
import {
  Wrapper,
  MatchBox,
  ResultBox,
  TeamName,
  ScoreInput,
  Button,
  Score,
} from "./styles";

const Results = () => {
  const match = useSelector(matches);
  const result = useSelector(results);
  const dispatch = useDispatch();

  const [firstTeamScore, setFirstTeamScore] = useState(null);
  const [secondTeamScore, setSecondTeamScore] = useState(null);

  const handleSubmit = (e, id, firstTeam, secondTeam) => {
    e.preventDefault();
    dispatch(
      submitResult({
        id: id,
        firstTeam: firstTeam,
        firstTeamScore: firstTeamScore,
        secondTeam: secondTeam,
        secondTeamScore: secondTeamScore,
      })
    );

    dispatch(
      updateFirstTeam({
        firstTeam: firstTeam,
        win: firstTeamScore > secondTeamScore,
        draw: firstTeamScore === secondTeamScore,
        lost: firstTeamScore < secondTeamScore,
      })
    );

    dispatch(
      updateSecondTeam({
        secondTeam: secondTeam,
        win: secondTeamScore > firstTeamScore,
        draw: secondTeamScore === firstTeamScore,
        lost: secondTeamScore < firstTeamScore,
      })
    );
  };

  const filterResults = (id) => {
    return result.filter((item) => item.id === id);
  };

  return (
    <Wrapper>
      {match.map((row, index) => (
        <MatchBox key={index}>
          {row.map(({ id, firstTeam, secondTeam }) => {
            return (
              <ResultBox key={id}>
                <TeamName>{firstTeam}</TeamName>
                {filterResults(id)[0] ? (
                  <Score>
                    {filterResults(id)[0].firstTeamScore} :{" "}
                    {filterResults(id)[0].secondTeamScore}
                  </Score>
                ) : (
                  <>
                    <ScoreInput
                      type="text"
                      onChange={(e) => setFirstTeamScore(e.target.value)}
                      value={null}
                    />
                    {":"}
                    <ScoreInput
                      type="text"
                      onChange={(e) => setSecondTeamScore(e.target.value)}
                      value={null}
                    />
                  </>
                )}
                <TeamName>{secondTeam}</TeamName>
                {result.filter((item) => item.id === id).length > 0 ? null : (
                  <Button
                    onClick={(e) => handleSubmit(e, id, firstTeam, secondTeam)}
                  >
                    Okay
                  </Button>
                )}
              </ResultBox>
            );
          })}
        </MatchBox>
      ))}
    </Wrapper>
  );
};

export default Results;

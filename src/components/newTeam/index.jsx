import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeam } from "../../store/slice";
import { teams } from "../../store/selectors";
import { TeamWrapper, Input, Button } from "./styles";

const NewTeam = () => {
  const inputValue = useRef("");
  const dispatch = useDispatch();
  const teamsList = useSelector(teams);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTeam({
        id: teamsList.length + 1,
        team: inputValue.current.value,
        played: 0,
        win: 0,
        draw: 0,
        lost: 0,
        points: 0,
      })
    );
    inputValue.current.value = "";
  };

  return (
    <TeamWrapper>
      <Input type="text" placeholder="New team" ref={inputValue} />
      <Button onClick={handleSubmit}>Add</Button>
    </TeamWrapper>
  );
};

export default NewTeam;

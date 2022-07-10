import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
  matches: [],
  results: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addTeam: (state, action) => {
      const newTeam = {
        id: action.payload.id,
        team: action.payload.team,
        played: action.payload.played,
        win: action.payload.win,
        draw: action.payload.draw,
        lost: action.payload.lost,
        points: action.payload.points,
      };

      const newMatch = {
        firstTeam: action.payload.team,
        secondTeam: action.payload.team,
      };

      state.matches = [
        ...state.matches,
        state.teams.map((team) => {
          return {
            ...newMatch,
            id: team.team + newTeam.team,
            firstTeam: team.team,
            secondTeam: newTeam.team,
          };
        }),
      ];

      state.teams = [...state.teams, newTeam];
    },
    submitResult: (state, action) => {
      const newResult = {
        id: action.payload.id,
        firstTeam: action.payload.firstTeam,
        firstTeamScore: action.payload.firstTeamScore,
        secondTeam: action.payload.secondTeam,
        secondTeamScore: action.payload.secondTeamScore,
      };

      state.results = [...state.results, newResult];
    },
    updateFirstTeam: (state, action) => {
      const team = state.teams.find(
        (team) => team.team === action.payload.firstTeam
      );
      team.played = team.played + 1;
      team.win = action.payload.win ? team.win + 1 : team.win;
      team.draw = action.payload.draw ? team.draw + 1 : team.draw;
      team.lost = action.payload.lost ? team.lost + 1 : team.lost;
      team.points = action.payload.win
        ? team.points + 3
        : action.payload.draw
        ? team.points + 1
        : team.points;
    },
    updateSecondTeam: (state, action) => {
      const team = state.teams.find(
        (team) => team.team === action.payload.secondTeam
      );
      team.played = team.played + 1;
      team.win = action.payload.win ? team.win + 1 : team.win;
      team.draw = action.payload.draw ? team.draw + 1 : team.draw;
      team.lost = action.payload.lost ? team.lost + 1 : team.lost;
      team.points = action.payload.win
        ? team.points + 3
        : action.payload.draw
        ? team.points + 1
        : team.points;
    },
  },
});

export const { addTeam, submitResult, updateFirstTeam, updateSecondTeam } =
  tableSlice.actions;
export default tableSlice;

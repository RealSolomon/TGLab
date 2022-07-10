import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const MatchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0.5rem;
`;

export const TeamName = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.25rem;
  flex: 1;
  font-size: 17px;
`;

export const Score = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const ScoreInput = styled.input`
  padding: 0.5rem;
  width: 35px;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  text-align: center;
  margin: 0 0.5rem;
  &:focus {
    outline: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ResultBox = styled.div`
  display: flex;
  margin: 0.25rem;
  align-items: center;
`;

export const Button = styled.button`
  background-color: slategray;
  color: #fff;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover {
    background-color: darkslategray;
  }
`;

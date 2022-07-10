import styled from "styled-components";

export const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const Input = styled.input`
  width: 35%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const Button = styled.button`
  background-color: slategray;
  color: #fff;
  border: none;
  padding: 0.5rem 1.7rem;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover {
    background-color: darkslategray;
  }
`;

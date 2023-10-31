import styled from "styled-components";

export const Button = styled.button`
  height: 50px;
  width: 50px;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  background: var(--black);
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  padding: 0;
  font-size: 1.4rem;
  box-shadow: none;
  border-radius: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background: var(--gray-600);
    box-shadow: none;
  }

  &:active {
    background: var(--black);

    box-shadow: none;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;

  border: 0;
  cursor: pointer;
  overflow: hidden;
  background: var(--black);
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  padding: 0 0.625rem;
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

  &:hover + div {
    opacity: 1;
  }
`;

export const PlayBackMenu = styled.div`
  position: absolute;
  bottom: 50px;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  button {
    height: initial;
    font-size: 1rem;
    padding: 2px;
  }
`;

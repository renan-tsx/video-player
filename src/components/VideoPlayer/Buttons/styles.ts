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
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
  }

  &:hover + div {
    opacity: 1;
  }

  &.btn-mute:hover + .btn-volume input {
    width: 7rem !important;
    align-self: end;
    opacity: 1 !important;
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

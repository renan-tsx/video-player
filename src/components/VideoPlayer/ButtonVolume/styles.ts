import styled from "styled-components";

interface BoxProps {
  children: {
    props: {
      defaultValue: number;
    };
  };
}

export const Box = styled.div<BoxProps>`
  display: flex;

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 7rem;
    border: 0;

    &:focus {
      box-shadow: none;
      outline: none;
    }

    /***** Chrome, Safari, Opera and Edge Chromium styles *****/
    /******************************************************** */

    /* slider track */
    &::-webkit-slider-runnable-track {
      /* background-color: var(--white); */
      background: linear-gradient(
        to right,
        var(--white) 0%,
        var(--white)
          ${({ children }) => {
            const percentage = children.props.defaultValue;
            return `${percentage}%`;
          }},
        var(--gray-500)
          ${({ children }) => {
            const percentage = children.props.defaultValue;
            return `${percentage}%`;
          }},
        var(--gray-500) 100%
      );
      border-radius: 0.5rem;
      height: 2px;
    }

    /* slider thumb */
    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      margin-top: -4px; /* Centers thumb on the track */

      /*custom styles*/
      background-color: var(--white);
      height: 10px;
      width: 10px;
      border-radius: 50%;
    }

    /* &:focus::-webkit-slider-thumb {
      border: 1px solid var(--white);
      outline: 3px solid var(--white);
      outline-offset: 0.125rem;
    } */
  }

  /******** Firefox styles ********/
  /****************************** */

  /* slider track */
  input[type="range"]::-moz-range-track {
    background-color: var(--white);
    border-radius: 0.5rem;
    height: 2px;
  }

  /* slider thumb */
  input[type="range"]::-moz-range-thumb {
    border: none; /*Removes extra border that FF applies*/
    border-radius: 0; /*Removes default border-radius that FF applies*/

    /*custom styles*/
    background-color: var(--white);
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

  /* input[type="range"]:focus::-moz-range-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.125rem;
  } */
`;

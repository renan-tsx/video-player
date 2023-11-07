import styled from "styled-components";
interface IContainer {
  time: number;
  max: number | undefined;
  buffer: number;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  position: absolute;
  top: -36px;
  background: ${({ theme }) => theme.timeLine.bg};
  overflow: hidden;

  &:hover input[type="range"] {
    &::-webkit-slider-thumb {
      opacity: 1;
      transition: 0.1s;
    }
  }

  input[type="range"] {
    width: 100%;

    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    border: 0;
    padding: 1rem;
    height: 0;

    &:focus {
      box-shadow: none;
      outline: none;
    }

    /***** Chrome, Safari, Opera and Edge Chromium styles *****/
    /******************************************************** */

    /* slider track */
    &::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.timeLine.bgCurrentTime} 0%,
        ${({ time, max, buffer, theme }) => {
          if (max === undefined || max === 0) return "0%";
          const currentTime = (time / max) * 100;
          const bufferTime = (buffer / max) * 100;
          const remainingTime = 100 - currentTime - bufferTime;

          return `
        ${theme.timeLine.bgCurrentTime} ${currentTime}%, 
        ${theme.timeLine.bgCurrentTime} ${currentTime}%,
        ${theme.timeLine.bgBuffer} ${currentTime}%, 
        ${theme.timeLine.bgBuffer} ${bufferTime}%,
        ${theme.timeLine.bgDuration} ${bufferTime}%, 
        ${theme.timeLine.bgDuration} ${100 - remainingTime}%
      `;
        }},
        ${({ theme }) => theme.timeLine.bgDuration} 100%
      );

      border-radius: 0.5rem;
      height: 2px;
    }

    /* slider thumb */
    &::-webkit-slider-thumb {
      opacity: 0;
      transition: 0.1s;

      -webkit-appearance: none; /* Override default look */
      appearance: none;
      margin-top: -4px; /* Centers thumb on the track */

      /*custom styles*/
      background-color: ${({ theme }) => theme.controls.bg};
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.timeLine.bgCurrentTime};
    }

    /* &:focus::-webkit-slider-thumb {
      border: 1px solid var(--white);
      outline: 3px solid var(--white);
      outline-offset: 0.125rem;
    } */

    /******** Firefox styles ********/
    /****************************** */

    /* slider track */
    &::-moz-range-track {
      // FIXME Apply linear-gradient
      /* background-color: var(--white); */
      background: linear-gradient(
        to right,
        var(--white) 0%,
        ${({ time, max, buffer }) => {
          if (max === undefined || max === 0) return "0%";
          const currentTime = (time / max) * 100;
          const bufferTime = (buffer / max) * 100;
          const remainingTime = 100 - currentTime - bufferTime;

          return `
            var(--white) ${currentTime}%, var(--white) ${currentTime}%,
            var(--timeline-bg-buffer) ${currentTime}%, var(--timeline-bg-buffer) ${bufferTime}%,
            var(--timeline-bg-duration) ${bufferTime}%, var(--timeline-bg-duration) ${
            100 - remainingTime
          }%
          `;
        }},
        var(--timeline-bg-duration) 100%
      );

      border-radius: 0.5rem;
      height: 2px;
    }

    /* slider thumb */
    &::-moz-range-thumb {
      /*custom styles*/
      background-color: var(--black);
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: 2px solid var(--white);
      padding: 0;
      box-sizing: border-box;
    }

    /* input[type="range"]:focus::-moz-range-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.125rem;
    } */
  }
`;

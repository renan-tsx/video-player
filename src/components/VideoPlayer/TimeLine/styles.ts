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
  background: var(--timeline-bg);
  overflow: hidden;

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
        var(--white) 0%,
        ${({ time, max, buffer }) => {
          if (max === undefined || max === 0) return "0%";
          const currentTime = (time / max) * 100;
          const bufferTime = (buffer / max) * 100;
          const remainingTime = 100 - currentTime - bufferTime;

          return `
            var(--white) ${currentTime}%, var(--white) ${currentTime}%,
            var(--timeline-buffer) ${currentTime}%, var(--timeline-buffer) ${bufferTime}%,
            var(--timeline-remaining) ${bufferTime}%, var(--timeline-remaining) ${
            100 - remainingTime
          }%
          `;
        }},
        var(--timeline-remaining) 100%
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
      background-color: var(--black);
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: 2px solid var(--white);
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
            var(--timeline-buffer) ${currentTime}%, var(--timeline-buffer) ${bufferTime}%,
            var(--timeline-remaining) ${bufferTime}%, var(--timeline-remaining) ${
            100 - remainingTime
          }%
          `;
        }},
        var(--timeline-remaining) 100%
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

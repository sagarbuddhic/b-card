// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const app = css`
  text-align: center;
`;

export const appHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const container = css`
  margin: 20px;
  display: flex;
  flex-flow: "row wrap";
  justify-content: space-evenly;
`;

export const form = css`
  border: 0.5px gray solid;
  padding: 15px;
`;

export const image = css`
  background-color: grey;
  height: 400px;
  width: 250px;
`;

export const card = css`
  padding: 15px;
  height: 400px;
  width: 800px;
`;

export const contactDetails = css`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

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
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 50px;
  justify-content: space-evenly;
`;

export const form = css`
  border-radius: 5px;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const imageContainer = css`
  background-color: #FFFEE4;
  height: 350px;
  width: 250px;
`;

export const image = css`
  height: 350px;
  width: 250px;
`;

export const card = css`
  padding: 15px;
  height: 400px;
  width: 700px;
  background-color: #FFFEE4;
`;

export const cardBody = css`
  padding-right: 70px;
`;

export const businessNameWrapper = css`
  padding-bottom: 40px;
`;

export const businessName = css`
  font-size: 40px;
  font-family: Cursive;
`;

export const name = css`
  font-size: 20px;
  font-family: Monospace;
  line-height: 0.8;
`;

export const profession = css`
  font-style: italic;
  font-family: Fantasy;
  font-size: 18px;
  line-height: 0.8;
  padding-bottom: 30px;
`;

export const contactDetails = css`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-family: Serif;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const address = css`
  font-size: 15px;
  font-family: Serif;
`;

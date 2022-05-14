import styled, { css } from "styled-components";

const Card = styled.div`
  background: #ffff;
  margin: 10px 0px;
  transition: 0.5s;
  margin-right: 5px;

  ${({ dark }) => {
    if (dark) {
      return css`
        background: black;
        color: #fff;
        font-weight: 600;
      `;
    } else {
      return css`
        border : solid 2px black;
      `;
    }
  }}
`;

export {
    Card
}
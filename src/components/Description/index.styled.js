import styled from "styled-components";

const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ${({ clamp = 3 }) => clamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: ${({align = 'left'}) => align}
`;

export {
    Description
}
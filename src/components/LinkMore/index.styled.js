import styled, { css } from "styled-components"
const LinkMore = styled.a`
  margin-top: 1.5rem;
  display: block;
  text-align: right;
  font-weight: 600;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer; 
  &:hover{
    opacity : 100%
  }
  ${({dark}) => {
    if(dark){
      return css`color : white; opacity: 40%;`;
    }else{
      return css`color: black; opacity: 80%;`;
    }
  }}
`

export {
    LinkMore
}
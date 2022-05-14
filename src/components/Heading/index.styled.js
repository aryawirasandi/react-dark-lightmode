import styled, { css } from "styled-components";

const Heading = styled.h1`
    font-family : 2rem;
    color: black;
    text-align : ${({ align = 'left'}) => align};
    ${({ dark }) => dark && css`color : #fff`}
`

export {
    Heading
}
import React from "react";
import styled from "styled-components";

const Error = (props) => {
    return (
        <Styled className="Error-container">
            <h1>404</h1>
            <h3>Page not found</h3>
        </Styled>
    )
};

export default Error;

const Styled = styled.div`
color: var(--color4);
min-height: 100%;
background-color: var(--color9);
font-size: 4vh;
flex: 1 0 auto;
display: grid;
place-items: center;
`;
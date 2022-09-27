import React from "react";
import styled from "styled-components";

const Title = (props) => {
    return (
        <Styled>
            <h1 className="wrapper">{props.children}</h1>
        </Styled>
    )
};

export default Title;

const Styled = styled.div`
padding: 2rem 0;
background-color: var(--color2);
color: var(--color4);
text-align: start;

h1 {
    font-family: "BebasNeue", sans-serif;
    font-style: regular;
    font-size: 3.1rem;
    line-height: 2.5rem;
    text-transform: uppercase;
}`;
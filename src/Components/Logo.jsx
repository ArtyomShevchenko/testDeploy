import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = (props) => {
    return (
        <Styled className="Logo">
            <Link to="/">
                {props.children}
            </Link>
        </Styled>
    )
};

export default Logo;

const Styled = styled.div`
color: var(--color2);
font-family: "Lobster";
font-size: 4.9rem;
line-height: 1.9rem;
`;
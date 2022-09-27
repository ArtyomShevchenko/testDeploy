import React from "react";
import Logo from "../Components/Logo";
import Search from "../Components/Search";
import BasketIcon from "../Components/BasketIcon";
import Navigation from "../Components/Navigation";
import ThemeToggle from "../Components/ThemeToggle";

import styled from "styled-components";

const Header = (props) => {
    return (
        <Styled>
            <Wrapper className="wrapper">
                <Logo>Aditii</Logo>
                <Search />
                <ThemeToggle />
                <BasketIcon />
            </Wrapper>
            <Navigation />
        </Styled>
    )
};

export default Header;

const Styled = styled.header`
display: flex;
flex-direction: column;
align-items: stretch;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 2rem;
padding: 2.6rem 0;
`;
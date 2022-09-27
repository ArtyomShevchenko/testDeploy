import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const navList = ["home", "sale", "handbags", "wallets", "accessories", "menu store", "shoes", "vintage", "services", "contact us"];

const Navigation = (props) => {
    return (
        <Nav className="Navigation">
            <ul className="wrapper">
                {navList.map((element, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/${element.replace(/\s/g, '')}`}>{element}</Link>
                        </li>
                    )
                })}
            </ul>
        </Nav>
    )
};

export default Navigation;

const Nav = styled.nav`
font-family: "BebasNeue", sans-serif;
background-color: var(--color2);
color: var(--color4);
font-size: 2.1rem;
line-height: 1.9rem;
padding: 1rem 0;
text-align: center;
text-transform: uppercase;

ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

li {
    flex-grow: 1;
    position: relative;
}

li::after {
    content: "";
    display: inline-block;
    width: 0.2rem;
    height: 100%;
    background-color: var(--color4);
    position: absolute;
    right: 0;
}

li:last-child::after {
    content: "";
    display: none;
}`;
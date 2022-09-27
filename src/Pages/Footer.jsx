import React from "react";
import { Link } from "react-router-dom";
import Copyright from "../Components/Copyright";
import styled from "styled-components";

const persons = {
    "featured sale": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
    "mens store": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
    "women store": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
    "quick links": [
        { id: "Alexis Hudson", link: "#" },
        { id: "American Apparel", link: "#" },
        { id: "Ben Sherman", link: "#" },
        { id: "Big Buddha", link: "#" },
        { id: "Chanel", link: "#" },
        { id: "Chistian Audigier", link: "#" },
        { id: "Coach", link: "#" },
        { id: "Cole Haan", link: "#" },
    ],
}

const Footer = (props) => {
    return (<>
        <FooterStyled>
            <div className="wrapper">
                {Object.keys(persons).map((person, index) => {
                    return (
                        <div key={index}>
                            <h1>{person}</h1>
                            <ul>
                                {persons[person].map((element, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={element.link}>
                                                {element.id}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </FooterStyled>
        <Copyright />
    </>
    )
};

export default Footer;

const FooterStyled = styled.footer`
margin-top: auto;
background-color: var(--color2);
color: var(--color4);
font-size: 1.5rem;
padding-top: 4rem;
padding-bottom: 4rem;

.wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    grid-gap: 2rem;
}

@media (max-width: 768px ) {
    .wrapper {
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem 2rem;
    }
}

ul {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}`;
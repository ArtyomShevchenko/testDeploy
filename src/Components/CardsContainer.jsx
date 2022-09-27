import React from "react";
import styled from "styled-components";

const CardsContainer = (props) => {
    return (
        <Styled className="wrapper">
            {props.children}
        </Styled>
    )
}

export default CardsContainer;

const Styled = styled.div`
display: grid;
grid-template-columns: repeat(3 ,1fr);
grid-gap: 5rem;
padding-top: 5rem;
padding-bottom: 7.5rem;
place-items: center;

@media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2 ,1fr);
    grid-gap: 4rem;
    padding-top: 4rem;
    padding-bottom: 6.5rem;
}

@media (max-width: 525px) {
    display: grid;
    grid-template-columns: repeat(1 ,1fr);
    grid-gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 5.5rem;
}
`;
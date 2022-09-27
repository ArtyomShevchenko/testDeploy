import React from "react";
import Context from "../Context";
import Title from "../Components/Title";
import styled from "styled-components";
import Swiper from "../Components/Swiper";

const Details = ({ props }) => {
    const context = React.useContext(Context);


    const handleclick = () => {
        context.basket.push(props)
        context.forceUpdate()
    }

    // console.log(props)

    return (
        <Styled className="Details-container">
            <Title>
                {props.title}
            </Title>
            <div className="wrapper">
                <Img>
                    <img src={require("../i/" + props.image)} alt="Image" />
                </Img>
                <h2>{props.type}</h2>
                <p>{props.description}</p>
                <div className="price">
                    <span>${props.price}</span>
                    <button onClick={handleclick}>Buy now</button>
                </div>
            </div>
            <Swiper></Swiper>
        </Styled>
    );
}

export default Details;

const Styled = styled.section`
color: var(--color1);
font-size: 1.5rem;
line-height: 2.7rem;
text-align: start;

.price {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: var(--color2);
    
    span {
        background: linear-gradient(transparent 95%, red 95%, red 0%);
    }
}

& > .wrapper {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 0;
}

button {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    border: none;
    background-color: var(--color5);
    border-radius: 0.5rem;
    color: var(--color4);
    cursor: pointer;
    transition: box-shadow 0.2s;
}`;

const Img = styled.div`
width: 100%;
height: 100%;

min-height: 300px;
min-width: 300px;
position: relative;
display: flex;
align-items: center;
justify-content: center;

img {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: contain;
}
`;
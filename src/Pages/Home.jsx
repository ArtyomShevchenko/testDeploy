import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import Swiper from "../Components/Swiper";
import Carusel from "../Components/Carusel";
import styled from "styled-components";
import CardsContainer from "../Components/CardsContainer";
import Title from "../Components/Title";

const Home = (props) => {
    const context = React.useContext(Context);

    const handleclick = (i) => {
        context.basket.push(context.homePageArr[i])
        context.forceUpdate()
    }

    const swiperArr = context.swiperArr

    return (
        <div className="Home-container">
            <Carusel />
            <Swiper swiperArr={swiperArr} />
            <div className="container">
                <Title>
                    FEATURED pRODUCTS
                </Title>
                <div className="wrapper">
                    <CardsContainer>
                        {context.homePageArr.map((element, index) => {
                            return (
                                <Card {...element} key={index}>
                                    <button onClick={() => handleclick(index)}>Buy now</button>
                                </Card>
                            )
                        })}
                    </CardsContainer>
                </div>
            </div>
        </div>
    )
};

export default Home;
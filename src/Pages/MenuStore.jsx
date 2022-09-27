import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import db from "../db";
import CardsContainer from "../Components/CardsContainer";
import Title from "../Components/Title";

const MenuStore = (props) => {
    const context = React.useContext(Context);

    const arr = [...db]

    const handleclick = (i) => {
        context.basket.push(arr[i])
        context.forceUpdate()
    }

    return (
        <div className="MenuStore-container">
            <Title>
                MenuStore
            </Title>
            <CardsContainer>
                {arr.map((element, index) => {
                    return (
                        <Card {...element} key={index}>
                            <button onClick={() => handleclick(index)}>Buy now</button>
                        </Card>
                    )
                })}
            </CardsContainer>
        </div>
    )
};

export default MenuStore;
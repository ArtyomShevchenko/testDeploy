import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import db from "../db";
import CardsContainer from "../Components/CardsContainer";
import Title from "../Components/Title";

const Accessories = (props) => {
    const context = React.useContext(Context);
    const arr = db.filter(element => element.type === "accessories")

    const handleclick = (i) => {
        context.basket.push(arr[i])
        context.forceUpdate()
    }

    return (
        <div className="Accessories-container">
            <Title>
                Accessories
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

export default Accessories;
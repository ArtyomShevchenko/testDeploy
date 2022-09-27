import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import db from "../db";
import CardsContainer from "../Components/CardsContainer";
import Title from "../Components/Title";

const Sale = (props) => {
    const context = React.useContext(Context);
    const arr = db.filter(element => element.type === "sale")

    const handleclick = (i) => {
        context.basket.push(arr[i])
        context.forceUpdate()
    }

    return (
        <div className="Sale-container">
            <Title>
                Sale
            </Title>
            <CardsContainer>
                {arr.map((element, index) => {
                    console.log(element)
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

export default Sale;
import React from "react";
import Context from "../Context";
import Card from "../Components/Card";
import db from "../db";
import CardsContainer from "../Components/CardsContainer";
import Title from "../Components/Title";

const Vintage = (props) => {
    const context = React.useContext(Context);
    const arr = db.filter(element => element.type === "vintage")

    const handleclick = (i) => {
        context.basket.push(arr[i])
        context.forceUpdate()
    }

    return (
        <div className="Vintage-container">
            <Title>
                Vintage
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

export default Vintage;
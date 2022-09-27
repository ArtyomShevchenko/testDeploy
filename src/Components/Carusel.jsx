import React from "react";
import Context from "../Context";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Carusel = (props) => {
    const context = React.useContext(Context)
    const [transformX, setTransformX] = React.useState(0)

    React.useEffect(e => {
        document.querySelector(".pagination-item").classList.add("pagination-item_select");
    }, [])

    const arr = context.caruselArr

    // get width preRender
    const ref = React.useRef(null);

    const [width, setWidth] = React.useState(0)

    React.useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);

    return (
        <Styled className="Carusel">
            <div className="wrapper">
                <div className="carusel-items" style={{ transform: `translate(${transformX}px)` }}>
                    {arr.map((item, index) => {
                        return (
                            <div className="carusel-item" key={index} ref={ref}>
                                <Img>
                                    <img src={require("../i/" + item.image)} alt="Image" />
                                </Img>
                                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Link to={"/Details/" + item.id} >
                                        <button>Shop now</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <PaginationStyled>
                    {arr.map((element, index) => {
                        return (
                            <div className="pagination-item"
                                key={index}
                                onClick={(e) => {
                                    setTransformX(-width * index)

                                    const collect = document.querySelectorAll(".pagination-item")
                                    collect.forEach(item => {
                                        item.classList.remove("pagination-item_select")
                                    })
                                    collect[index].classList.add("pagination-item_select")
                                }}>
                            </div>
                        )
                    })}
                </PaginationStyled>
            </div>

        </Styled>
    )
};

export default Carusel;

const Styled = styled.section`
padding-top: 4rem;
background-color: var(--color2);
filter: brightness(0.95);
color: white;

display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;

.wrapper {
    overflow: hidden;
}

.carusel-items {
    transition: all 1s;
    display: flex;
    width: 100%;
    height: 100%;
}

.carusel-item {
    min-width: 100%;
    max-height: 300px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    place-items: center;
    user-select: none;
    transition: all 0.2s;
    padding: 2rem;
}

h3 {
    font-size: 6rem;
    line-height: "5.4rem";
    white-space: pre-wrap;
}

img {
    max-width: 100%;
    height: 100%;
    object-fit: containe;
}

button {
    padding: 1rem 2rem;
    background-color: transparent;
    border: 0.3rem solid white;
    border-radius: 0.6rem;
    box-shadow: none;
    color: var(--color4);
    cursor: pointer;
}

a {
    margin-right: auto;
}`;

const Img = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;

img {
    height: 100%;
    position: absolute;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: containe;
}
`

const PaginationStyled = styled.div`
padding-bottom: 35px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

.pagination-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    background-color: white;
    cursor: pointer;
    opacity: 1;
}
.pagination-item_select {
    opacity: 0.3;
}`;
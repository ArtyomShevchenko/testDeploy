import React from "react";
import Context from "../Context";
import styles from "styled-components";
import { Link } from "react-router-dom";

const Swiper = (props) => {
    const context = React.useContext(Context);
    const [transformX, setTransformX] = React.useState(0)

    
    // get width preRender
    const ref = React.useRef(null);
    const arr = context.swiperArr

    const [width, setWidth] = React.useState(0);

    React.useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);

    // property
    let numbersItems = 0;

    const transform = {
        transform: `translate(${transformX}px)`,
    }

    // console.log(width)

    // test
    // const handleclick = (i) => {
    //     context.basket.push(context.homePageArr[i])
    //     context.forceUpdate()
    // }

    return (
        <Styles className="swiper-container">

            <div className="btn btn-prew" onClick={() => {
                transformX >= 0 ? setTransformX(-width * (numbersItems - 3)) : setTransformX(transformX + width)
            }}>
                <svg viewBox="0 0 47.255 47.255">
                    <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z" />
                </svg>
            </div>

            <div className="view-container wrapper">
                <div className="items" style={transform}>
                    {arr.map((item, index) => {
                        numbersItems += 1;
                        return (
                            <div className="item" key={index} ref={ref}>
                                <img src={require("../i/" + item.image)} alt="Image" />
                                <h3>{item.title}</h3>
                                <Link to={"/Details/" + item.id} >
                                    <button>Shop</button>
                                </Link>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className="btn btn-next" onClick={() => {
                transformX <= -(width * (numbersItems - 3)) ? setTransformX(0) : setTransformX(transformX - width)
            }}>
                <svg viewBox="0 0 47.255 47.255" style={{ transform: "rotate(0deg)", height: "90px" }}>
                    <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z" />
                </svg>
            </div>
        </Styles>
    )
};

export default Swiper;

const Styles = styles.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a {
        margin-right: auto;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        z-index: 1;
        width: 100%;
        cursor: pointer;
    }
    
    .btn-next {
        justify-content: flex-start;
    }
    
    .btn-prew {
        justify-content: flex-end;

        svg {
            transform: rotate(180deg);
        }
    }
    
    .btn svg {
        fill: var(--color3);
        transition: fill 0.2s;
        height: 90px;
    }
    
    .btn:active svg {
        fill: var(--color1);
    }
    
    .view-container {
        flex: 1 0 100%;
        overflow: hidden;
    }
    
    .items {
        display: flex;
        flex-direction: row;
        transition: all 0.4s;
        gap: 2px;
    }
    
    .item {
        min-width: 33.33%;
        height: 190px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 50%);
        align-items: center;
        justify-content: center;
        grid-gap: 2rem;
        padding: 2.5rem;
        text-align: start;
        position: relative;
        box-size: border-box;
    }
    
    .item:after {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background-color: var(--color3);
        position: absolute;
        top: 0;
        right: 0;
    }
    
    img {
        max-width: 100%;
        max-height: 100%;
        // object-fit: contain;
        object-fit: cover;
        object-position: center;
        grid-row: 1/3;
    }
    
    .item h3 {
        margin: auto auto 0 0;
        color: var(--color3);
        font-size: 2.5rem;
        line-height: 2.7rem;
        font-weight: bold;
    }
    
    button {
        margin: 0 auto auto 0;
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
    }
    
    button:hover {
        box-shadow: 0 0 1rem gray
    }
    
    .select {
        background-color: red;
    }
    `;
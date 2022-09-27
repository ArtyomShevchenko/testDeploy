import React from "react";
import styles from "styled-components";
import db from "../db.json";
import { Link } from "react-router-dom";

const Search = (props) => {
    const [inputValue, setInputValue] = React.useState("");
    const [items, setItems] = React.useState([]);

    const [page, setPage] = React.useState({})

    const filterData = (arr, value) => {
        setInputValue(value)
        setItems(() => arr.filter(data => data.title.includes(inputValue)))
    }

    return (
        <Styles className="Search" >
            <input type="text"
                onChange={e => filterData(db, e.target.value)} />
            <svg>
                <path d="M21.515,20.872 L20.871,21.515 C20.224,22.161 19.176,22.161 18.529,21.515 L14.477,17.468 C13.023,18.378 11.304,18.905 9.461,18.905 C4.236,18.905 -0.000,14.673 -0.000,9.452 C-0.000,4.232 4.236,-0.000 9.461,-0.000 C14.686,-0.000 18.922,4.232 18.922,9.452 C18.922,11.304 18.389,13.031 17.468,14.489 L21.515,18.532 C22.161,19.178 22.161,20.226 21.515,20.872 ZM9.461,2.616 C5.682,2.616 2.618,5.677 2.618,9.452 C2.618,13.228 5.682,16.289 9.461,16.289 C13.240,16.289 16.304,13.228 16.304,9.452 C16.304,5.677 13.240,2.616 9.461,2.616 Z" />
            </svg>
            <PopupStyles className="popup-container">
                <ul className="popup">
                    {items.map((e, i) => {
                        return (
                            <li key={i}
                                onClick={(e) => {
                                    setPage({ ...items[i] })
                                    setItems([])
                                }}
                            >
                                <Link to={"/Details/" + items[i].id} >{e.type} {e.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </PopupStyles>
        </Styles >
    )
};

export default Search;

const Styles = styles.div`
position: relative;
height: 3.3rem;
width: 43.6rem;
display: flex;
align-items: center;
justify-content: center;
border: 0.1rem solid var(--color3);

input{
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    color: var(--color1);
}

svg{
    width: 3rem;
    height: 2.2rem;
    fill: var(--color3);
    background-color: transparent;
}`;

const PopupStyles = styles.div`
width: 100%;
max-height: 500px;
position: absolute;
bottom: 0;
left: 0;
transform: translateY(100%);
z-index: 50;

.popup {
    margin-top: 1rem;
    background-color: var(--bg);
}

li {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    color: var(--color2);
    transition: color 0.2s;
    
    &:hover {
        color: var(--color1);
    }
}

a {
    padding: 1rem;
}`;
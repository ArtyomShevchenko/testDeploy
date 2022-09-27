import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

html {
    font-size: 10px;
    font-family: "OpenSans", sans-serif;
}

:root {
    --bg: #fff;
    --color1: #000;
    --color2: #3cc3b5;
    --color3: lightgray;
    --color4: #fff;
    --color5: #3cc395;

    --color9: rgb(200, 100, 100);
};

body[data-theme="light"] {
    --bg: #fff;
    --color1: #000;
    --color2: #3cc3b5;
}
body[data-theme="dark"] {
    --bg: rgb(10, 20, 30);
    --color1: #fff;
    --color2: #3c43b5;
    --color3: #3c43b5;
    --color5: rgba(100, 0, 200, 1);
}

body {
    background-color: var(--bg);
    color: var(--text);
}

.App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

a {
    color: inherit;
}

.wrapper {
max-width: 1024px;
width: 100%;
margin: 0 auto;
}

button, h1, h2, h3 {
    font-family: "BebasNeue";
    text-transform: uppercase;
}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Global />
        <App />
    </BrowserRouter>
);
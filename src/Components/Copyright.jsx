import styled from "styled-components";

const Copyright = (props) => {
    return (
        <Styled className="Copyright">
            <div></div>
            Copyright © 2013 Css Aythor
        </Styled>
    )
};

export default Copyright;

const Styled = styled.section`
text-align: center;
font-size: 1.5rem;
line-height: 2.8rem;
padding: 0.5rem;
color: var(--color4);
position: relative;
div {
    width: 100%;
    height: 100%;
    filter: brightness(0.9);
    background-color: var(--color2);
    positioN: absolute;
    top: 0;
    left: 0;
    z-index: -1;
};
`
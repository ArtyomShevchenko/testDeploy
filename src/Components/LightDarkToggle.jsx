import React from "react";
import Context from "../Context";

const LightDarkToggle = () => {
    const context = React.useContext(Context)

    const handleSelect = (e) => {
        context.select(e.target.value);
    }

    return (
        <select onChange={handleSelect}>
            {context.style.map((element, index) => {
                return (
                    <option value={index}>{element.id}</option>
                )
            })}
        </select>
    )
};

export default LightDarkToggle;
import React from "react";
import classes from "./Select.module.css"

const Select = ({options, defaultValue, value, setValue}) => {

    return (
        <select
        className={classes.slct}
        value={value}
        onChange={setValue}>
            <option disabled value={defaultValue}>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.value}
                </option>)
            }
        </select>
    )
}

export default Select;
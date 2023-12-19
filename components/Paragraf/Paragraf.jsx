import React from "react";
import classes from "../Paragraf/Paragraf.module.css";

const Paragraf = ({title, text}) => {
    return(
        <div className={classes.paragraf}>
            <div className={classes.title}>{title}</div>
            <div className={classes.text}>
                {text.map((txt) => 
                    <div>{txt}</div>
                )}
            </div>
        </div>
    );
}

export default Paragraf;
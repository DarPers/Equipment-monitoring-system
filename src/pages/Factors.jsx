import React, { useState } from "react";
import Header from "../components/header/Header";
import classes from "../styles/Page.module.css"
import json_data from "../data/equipment.json"
import Factor from "../components/factor/Factor";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import List from '@mui/material/List';

const Factors = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [factors, setFactors] = useState(location?.state != undefined ? location.state.newFactors : json_data);

    const Add = () => {
        navigate("/add", {state : {factors : factors}});
    }

    const remove = (id) => {
        setFactors(factors.filter((factor) => factor.id_factor !== id));
        //перезапись файла
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.title}>Factors</div>
                    <Button onClick={Add}>Add New</Button>
                </div>
                <List className={classes.factors}>
                    {factors.map((factor => 
                        <Factor
                            name={factor.name} 
                            key={factor.id_factor} 
                            id={factor.id_factor} 
                            description={factor.description} 
                            phone_number={factor.phone_number}
                            remove={remove}
                        />
                    ))}
                </List>
            </div>
        </div>
    )
}

export default Factors;
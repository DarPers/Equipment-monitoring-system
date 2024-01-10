import React, { useState, useMemo } from "react";
import Header from "../components/header/Header";
import classes from "../styles/Page.module.css"
import json_data from "../data/equipment.json"
import Factor from "../components/factor/Factor";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import List from '@mui/material/List';
import Filter from "../components/filter/Filter";

const Factors = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [factors, setFactors] = useState(location?.state != undefined ? location.state.factors : json_data);
    const [query, setQuery] = useState("");
    const Add = () => {
        navigate("/addFactory", {state : {factors : factors}});
    }

    const remove = (id) => {
        setFactors(factors.filter((factor) => factor.id_factor !== id));
        //перезапись файла
    }

    const searchedFactories = useMemo(() => {
        if (query){
          return factors.filter((item) => 
            item.name.toLowerCase().includes(query) || item.phone_number.toLowerCase().includes(query))
        }
        else {
            return factors;
        }
    }, [query, factors]);

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.title}>Factors</div>
                    <Button onClick={Add}>Add New</Button>
                </div>
                <Filter searchQuery={query} setSearchQuery={setQuery}></Filter>
                <List className={classes.factors}>
                    {searchedFactories.map((factor => 
                        <Factor
                            name={factor.name} 
                            key={factor.id_factor} 
                            id={factor.id_factor} 
                            description={factor.description} 
                            phone_number={factor.phone_number}
                            remove={remove}
                            equips={(factors.filter((equip) => equip.id_factor === factor.id_factor))[0]?.equipment}
                        />
                    ))}
                </List>
            </div>
        </div>
    )
}

export default Factors;
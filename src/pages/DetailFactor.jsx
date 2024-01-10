import React, { useState } from "react";
import Header from "../components/header/Header";
import Equip from "../components/equipment/Equip";
import classes from "../styles/Page.module.css"
import json_data from "../data/equipment.json"
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const DetailFactor = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const [equipments, setEquipments]  = useState(location.state?.factor.equipments);

    const remove = (id) => {
        setEquipments(equipments.filter((equipment) => equipment.id !== id));
    }

    const back = () => {
        navigate("/factors");
    }

    const Add = () => {
        navigate("/add", {state : {factor: location.state.factor}});
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.title}>{location.state.factor.name}</div>
                    <Button onClick={back}>Back</Button>
                </div>
                <div className={classes.desc}>
                    <div>{location.state.factor.phone}</div>
                    <div>{location.state.factor.description}</div>
                </div>
                <div className={classes.info}>
                    <div className={classes.title}>Equipments</div>
                    <Button onClick={Add}>Add New</Button>
                </div>
                <div className={classes.equipments}>
                    {
                        equipments ? 
                            equipments.map(eqp => 
                                <Equip name={eqp.name} 
                                   condition={eqp.condition} key={eqp.id} 
                                   id={eqp.id} 
                                   img={eqp.img} 
                                   description={eqp.description} 
                                   room={eqp.room}
                                   remove={remove}
                                />
                            )
                            : <p>No equipments</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailFactor;
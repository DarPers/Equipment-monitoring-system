import React, { useState } from "react";
import Header from "../components/header/Header";
import Equip from "../components/equipment/Equip";
import classes from "../styles/Page.module.css"
import json_data from "../data/equipment.json"
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Equipments = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [equipments, setEquipments] = useState(location?.state != undefined ? location.state.newEquips : json_data);

    const Add = () => {
        navigate("/add", {state : {equipments : equipments}});
    }

    const remove = (id) => {
        const newEquips = equipments.map((item) => ({
            ...item,
            equipment: item.equipment.filter((equip) => equip.id !== id),
        }));
        setEquipments(newEquips);
        //перезапись файла
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.title}>Equipments</div>
                    <Button onClick={Add}>Add New</Button>
                </div>
                <div className={classes.equipments}>
                    {equipments.map((eqp_group => 
                        eqp_group.equipment.map((eqp => 
                            <Equip name={eqp.name} 
                               condition={eqp.condition} key={eqp.id} 
                               id={eqp.id} 
                               img={eqp.img} 
                               description={eqp.description} 
                               room={eqp.room}
                               remove={remove}
                               factor={eqp_group.name}/>
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Equipments;
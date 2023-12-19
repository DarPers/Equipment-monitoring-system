import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Equip from "../components/equipment/Equip";
import classes from "../styles/Page.module.css"
import json_data from "../data/equipment.json"
import Button from "../UI/button/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Equipments = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [equipments, setEquipments] = useState(location?.state != undefined ? location.state.newEquips : json_data);

    const Add = () => {
        navigate("/add", {state : {equipments : equipments}});
    }

    const remove = (id) => {
        setEquipments(equipments.filter((equipment) => equipment.id !== id));
        //перезапись файла
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.title}>Equipment</div>
                    <Button onClick={Add}>Add New</Button>
                </div>
                <div className={classes.equipments}>
                    {equipments.map((eqp => 
                        <Equip name={eqp.name} 
                               condition={eqp.condition} key={eqp.id} 
                               id={eqp.id} 
                               img={eqp.img} 
                               description={eqp.description} 
                               room={eqp.room}
                               remove={remove}/>))}
                </div>
            </div>
        </div>
    )
}

export default Equipments;
import React, { useState } from "react";
import Header from "../components/header/Header";
import Equip from "../components/equipment/Equip";
import classes from "../styles/Page.module.css"
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const DetailFactor = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const [factor, setFactor]  = useState(location.state?.factor);
    console.log(factor);
    const remove = (id) => {
        const newEquips = factor.equipments.filter((equip) => equip.id !== id)
        setFactor({...factor, equipments: newEquips});
        console.log(factor.equipments);
    }

    const back = () => {
        navigate("/factors");
    }

    const Add = () => {
        navigate("/add", {state : {factor: factor}});
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.title}>{factor.name}</div>
                    <Button onClick={back}>Back</Button>
                </div>
                <div className={classes.desc}>
                    <div>{factor.phone}</div>
                    <div>{factor.description}</div>
                </div>
                <div className={classes.info}>
                    <div className={classes.title}>Equipments</div>
                    <Button onClick={Add}>Add New</Button>
                </div>
                <div className={classes.equipments}>
                    {
                        factor.equipments?.length !== 0 ?
                        factor.equipments?.map(eqp => 
                            <Equip name={eqp.name} 
                               condition={eqp.condition} key={eqp.id} 
                               id={eqp.id} 
                               img={eqp.img} 
                               description={eqp.description} 
                               room={eqp.room}
                               remove={remove}
                            />
                        ) : <p>No equipments</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailFactor;
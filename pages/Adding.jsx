import React, { useState } from "react";
import Header from "../components/header/Header";
import classes from "../styles/Page.module.css"
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Adding = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const option = [{value: "New"}, {value: "Nominal"}, {value: "Old"}];
    const uniqueId = uuidv4();
    const [newEquip, setNewEquip] = useState({id: uniqueId, name: "", description: "", room: "", img: "", condition: "Nominal"});

    const add = () => {
        let equips = location.state.equipments;
        equips.push(newEquip);
        navigate("/equipments", {state: {newEquips: equips}});
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.inpt_block}>
                    <div className={classes.title}>Create new equipment</div>
                    <div className={classes.inpts}>
                        <Input value={newEquip.name} onChange={(e) => setNewEquip({...newEquip, name: e.target.value})} placeholder="name"></Input>
                        <Input value={newEquip.description} onChange={(e) => setNewEquip({...newEquip, description: e.target.value})} placeholder="description"></Input>
                        <Input value={newEquip.room} onChange={(e) => setNewEquip({...newEquip, room: e.target.value})} placeholder="room"></Input>
                        <Input value={newEquip.img} onChange={(e) => setNewEquip({...newEquip, img: e.target.value})} placeholder="img"></Input>
                        <Select value={newEquip.condition} setValue={(e) => setNewEquip({...newEquip, condition: e.target.value})} options={option} defaultValue="Conditional"></Select>
                    </div>
                </div>
                <Button onClick={add}>Add equipment</Button>
            </div>
        </div>
    )
}

export default Adding;
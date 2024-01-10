import React, { useState } from "react";
import Header from "../components/header/Header";
import classes from "../styles/Page.module.css"
import { MenuItem, TextField, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Adding = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const option = [{value: "New"}, {value: "Nominal"}, {value: "Old"}];
    const uniqueId = uuidv4();
    const [newEquip, setNewEquip] = useState({id: uniqueId, name: "", description: "", room: "", img: "", condition: "Nominal"});

    const add = () => {
        let equips = location.state.factor;
        console.log(equips);
        equips.equipments.push(newEquip);
        navigate("/detailFactor", {state: {factor: equips}});
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.inpt_block}>
                    <div className={classes.title}>Create new equipment</div>
                    <div className={classes.inpts}>
                        <TextField id="outlined-basic" value={newEquip.name} onChange={(e) => setNewEquip({...newEquip, name: e.target.value})} label="Name" variant="outlined" />
                        <TextField id="outlined-basic" value={newEquip.description} onChange={(e) => setNewEquip({...newEquip, description: e.target.value})} label="Description" variant="outlined" />
                        <TextField id="outlined-basic" value={newEquip.room} onChange={(e) => setNewEquip({...newEquip, room: e.target.value})} label="Room" variant="outlined" />
                        <TextField id="outlined-basic" value={newEquip.img} onChange={(e) => setNewEquip({...newEquip, img: e.target.value})} label="Image" variant="outlined" />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Conditional"
                            onChange={(e) => setNewEquip({...newEquip, condition: e.target.value})}
                            defaultValue="Old"
                            value={newEquip.condition}
                            helperText="Please select your option">
                            {option.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.value}
                              </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
                <Button onClick={add}>Add equipment</Button>
            </div>
        </div>
    )
}

export default Adding;
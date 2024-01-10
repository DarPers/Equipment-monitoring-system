import React, { useState } from "react";
import Header from "../components/header/Header";
import classes from "../styles/Page.module.css"
import { TextField, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddingFactors = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const uniqueId = uuidv4();
    const [newFactor, setNewFactor] = useState({id_factor: uniqueId, name: "", description: "", phone_number: "", equipment: []});

    const add = () => {
        let factors = location.state.factors;
        factors.push(newFactor);
        navigate("/factors", {state: {factors: factors}});
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.inpt_block}>
                    <div className={classes.title}>Create new factory</div>
                    <div className={classes.inpts}>
                        <TextField id="outlined-basic" value={newFactor.name} onChange={(e) => setNewFactor({...newFactor, name: e.target.value})} label="Name" variant="outlined" />
                        <TextField id="outlined-basic" value={newFactor.description} onChange={(e) => setNewFactor({...newFactor, description: e.target.value})} label="Description" variant="outlined" />
                        <TextField id="outlined-basic" value={newFactor.phone_number} onChange={(e) => setNewFactor({...newFactor, phone_number: e.target.value})} label="Phone number" variant="outlined" />
                    </div>
                </div>
                <Button style={{marginTop: 10}} onClick={add}>Add factory</Button>
            </div>
        </div>
    )
}

export default AddingFactors;
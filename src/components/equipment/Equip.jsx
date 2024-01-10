import React, {useState} from "react";
import classes from "./Equip.module.css"
import { Button, Card, CardMedia, CardContent, Typography} from "@mui/material";
import Modal from "../modal/Modal";

const Equip = (props) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(
        <Card className={classes.card}>
            <CardMedia
                component="img"
                alt={props.name}
                height="300"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.factor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.condition}
                </Typography>
            </CardContent>
            <Modal name={props.name} 
                   condition={props.condition} 
                   img={props.img} 
                   description={props.description} 
                   room={props.room} 
                   isOpen={isModalOpen} 
                   onClose={closeModal} />
            <Button size="small" onClick={openModal}>Detail</Button>
            <Button size="small" onClick={() => props.remove(props.id)}>Delete</Button>
        </Card>
    );
};

export default Equip;
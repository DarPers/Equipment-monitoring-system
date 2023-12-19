import React, {useState} from "react";
import classes from "./Equip.module.css"
import Button from "../../UI/button/Button";
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
        <div className={classes.card}>
            <div className={classes.image}>
                <img alt="" src={props.img}></img>
            </div>
            <div>
                <div className={classes.title}>{props.name}</div>
                <div>Condition: {props.condition}</div>
            </div>
            <div className={classes.btn_block}>
                <Button onClick={openModal}>Detail</Button>
                <Button onClick={() => props.remove(props.id)}>Delete</Button>
            </div>
            <Modal name={props.name} 
                   condition={props.condition} 
                   img={props.img} 
                   description={props.description} 
                   room={props.room} 
                   isOpen={isModalOpen} 
                   onClose={closeModal} />
        </div>
    );
};

export default Equip;
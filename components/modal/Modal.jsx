import React from 'react';
import classes from "./Modal.module.css"
import Button from '../../UI/button/Button';

const Modal = ({ isOpen, onClose, ...props}) => {
  if (!isOpen) return null;

  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>
            <div className={classes.image}>
                <img alt="" src={props.img}></img>
            </div>
            <div>
                <div className={classes.title}>{props.name}</div>
                <div className={classes.desc}>
                    <div>Description: {props.description}</div>
                    <div>Condition: {props.condition}</div>
                    <div>Room №{props.room}</div>
                </div>
            </div>
        <Button onClick={onClose}>Закрыть</Button>
      </div>
    </div>
  );
};

export default Modal;
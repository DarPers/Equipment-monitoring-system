import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FactoryIcon from '@mui/icons-material/Factory';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Factor = (props) => {

    const navigate = useNavigate();

    const detailFactor = () => {
      navigate("/detailFactor", {state : {factor : {id: props.id, name: props.name, description: props.description, phone: props.phone_number, 
                                                    equipments: props.equips}}});
    };
  
    return(
        <ListItem style={{marginLeft: "30%"}}
          secondaryAction={
            <div>
              <Button edge="end" onClick={detailFactor}>Detail</Button>
              <IconButton edge="end" aria-label="delete" onClick={() => {props.remove(props.id)}}>
                <DeleteIcon />
              </IconButton>
            </div>
            }>
            <ListItemAvatar>
                <Avatar>
                    <FactoryIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.name} secondary={props.phone_number} />
      </ListItem>
    );
};

export default Factor;
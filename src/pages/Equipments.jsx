import React, { useState, useMemo } from "react";
import Header from "../components/header/Header";
import Equip from "../components/equipment/Equip";
import classes from "../styles/Page.module.css"
import json_data from "../data/equipment.json"
import { useLocation } from "react-router-dom";
import Filter from "../components/filter/Filter";

const Equipments = () => {
    const location = useLocation();
    const [equipments, setEquipments] = useState(location?.state != undefined ? location.state.newEquips : json_data);
    console.log(equipments);
    const [query, setQuery] = useState("");

    const remove = (id) => {
        const newEquips = equipments.map((item) => ({
            ...item,
            equipment: item.equipment.filter((equip) => equip.id !== id),
        }));
        setEquipments(newEquips);
        //перезапись файла
    }

    const searchedEquips = useMemo(() => {
        if (query){
          return equipments.map((item) => ({
            ...item, 
            equipment: item.equipment.filter(equip => equip.name.toLowerCase().includes(query) || equip.condition.toLowerCase().includes(query))}))
        }
        else {
            return equipments;
        }
    }, [query, equipments]);

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.title}>Equipments</div>
                </div>
                <Filter searchQuery={query} setSearchQuery={setQuery}></Filter>
                <div className={classes.equipments}>
                    {searchedEquips.map((eqp_group => 
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
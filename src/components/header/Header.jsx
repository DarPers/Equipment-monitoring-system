import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {

    const navigate = useNavigate("");

    const goHome = () => {
        navigate('/');
    }

    return (
        <div className={classes.head}>
            <div onClick={goHome} className={classes.logo}>EquipControlSYS</div>
            <div className={classes.links}>
                <div>
                    <Link to="/equipments">Equipments</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
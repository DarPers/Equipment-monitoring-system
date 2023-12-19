import React from "react";
import Header from "../components/header/Header";
import Button from "../UI/button/Button";
import Paragraf from "../components/Paragraf/Paragraf"
import classes from "../styles/Page.module.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const start = () => {
        navigate("/equipments");
    }

    return (
        <div>
            <Header></Header>
            <div className={classes.content}>
                <Paragraf title="Welcome to EquipControlSYS - Your Trusted Partner in Efficient Equipment Management!" text={[]}></Paragraf>
                <Paragraf title="WHY CHOOSE US" text={["Expertise: With years of experience in equipment management, we bring unparalleled expertise to the table.",
                                                "Reliability: Trust in a reliable system that ensures accuracy and dependability in accounting for the state of your equipment.",
                                                "Custom Solutions: We understand that each enterprise is unique. Our solutions are customizable to meet the specific needs of your business.",
                                                "Security: Your data is important to us. Our platform prioritizes the security and confidentiality of your equipment-related information."]}></Paragraf>
                <Paragraf title="GET STARTED TODAY" text={["Enhance the efficiency of your enterprise by partnering with EquipControlSYS. Take the first step towards seamless equipment management and experience the benefits of accurate accounting and real-time tracking. Ready to revolutionize the way you manage your equipment? Contact us today to schedule a demo or sign up for our services. Let's work together to ensure the optimal state of your equipment, driving success for your business!"]}></Paragraf>
            </div>
            <Button onClick={start}>START</Button>
        </div>
    )
}

export default Home;
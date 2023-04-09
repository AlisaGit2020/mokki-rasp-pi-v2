import React, {useState} from "react";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";

const Inverter = () => {

    const [switchState, setSwitchState] = useState(true);

    const handleSwitch = () => {
        setSwitchState(prevState => !prevState);

        let apiPath = `http://localhost:3001r/inverter/status/`;
        console.log(apiPath)
        if (switchState) {
            apiPath += 'on';
        }else{
            apiPath += 'off'
        }

        fetch(apiPath)
            .catch(error => console.error(error));


    };

    return (
        <FormGroup>
            <FormControlLabel control={<Switch />} checked={switchState} onChange={handleSwitch} label="Inverter" />
        </FormGroup>
    );
};

export default Inverter;
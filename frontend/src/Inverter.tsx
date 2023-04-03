import React from "react";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";

const Inverter = () => {

    return (
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Inverter" />
        </FormGroup>
    );
};

export default Inverter;
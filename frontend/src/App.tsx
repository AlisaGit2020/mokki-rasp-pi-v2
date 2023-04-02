import React from 'react';
import Layout from "./components/Layout";
import Content from "./components/Content";
import {Button} from "@mui/material";


const App: React.FC = () => {
    return (
        <Layout title={"Mökki"}>
            <Content>
                <Button title={"Button"} variant={"contained"} color={"info"} >Button</Button>
            </Content>
        </Layout>
    );
};

export default App;

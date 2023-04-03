import React from 'react';
import Layout from "./components/Layout";
import Content from "./components/Content";
import Inverter from "./Inverter";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App: React.FC = () => {

    return (
        <Layout title={"Mökki"}>
            <Content>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Inverter />} />
                        <Route path={"inverter"} element={<Inverter />} />
                    </Routes>
                </BrowserRouter>
            </Content>
        </Layout>
    );
};

export default App;

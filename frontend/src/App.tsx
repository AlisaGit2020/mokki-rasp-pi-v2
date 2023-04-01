import React from 'react';
import Layout from "./layouts/Layout";
import Content from "./layouts/Content";


const App: React.FC = () => {
    return (
        <Layout title={"Mökki"}>
            <Content>
                <h1>Tämä on sisältöä</h1>
                <p>Tämä on esimerkki sisällöstä</p>
            </Content>
        </Layout>
    );
};

export default App;

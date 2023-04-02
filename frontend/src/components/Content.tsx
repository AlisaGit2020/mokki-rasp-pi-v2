import React from 'react';

import {Container} from '@mui/material';

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {

    return (
        <main>
        <Container sx={{marginTop:10}} maxWidth="lg">
        {children}
        </Container>
        </main>
    );
};

export default Content;

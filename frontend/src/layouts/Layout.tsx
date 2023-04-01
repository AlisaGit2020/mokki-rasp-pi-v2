import React from 'react';

import Content from './Content';
import {AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}


const Layout = ({ children, title }: LayoutProps) => {

    return (
        <div>
            <CssBaseline />
            <AppBar position="absolute">
                <Toolbar>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Content>{children}</Content>
        </div>
    );
};

export default Layout;

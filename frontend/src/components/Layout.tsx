import React from 'react';

import Content from './Content';
import {AppBar, Button, CssBaseline, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {House} from "@mui/icons-material";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}


const Layout = ({ children, title }: LayoutProps) => {

    return (
        <div>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Stack direction={"row"} spacing={2} alignItems={"center"} sx={{ justifyContent: 'space-between', width: '100%' }}>
                        <Stack direction={"row"} spacing={1} alignItems={"center"}>
                            <IconButton size={"large"}>
                                <House></House>
                            </IconButton>
                            <Typography
                                component="div"
                                variant="h6"
                                color="inherit"
                                noWrap
                            >
                                {title}
                            </Typography>
                        </Stack>
                        <Button color={"inherit"}>Inverter</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Content>{children}</Content>
        </div>
    );
};

export default Layout;

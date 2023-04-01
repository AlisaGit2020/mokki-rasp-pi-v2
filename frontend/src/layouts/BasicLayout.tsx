import React from 'react';
import { Grid } from '@mui/material';

function BasicLayout() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                Header
            </Grid>
            <Grid item xs={3}>
                Sidebar
            </Grid>
            <Grid item xs={9}>
                Main Content
            </Grid>
            <Grid item xs={12}>
                Footer
            </Grid>
        </Grid>
    );
}

export default BasicLayout;
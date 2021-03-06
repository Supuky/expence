import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form';

import useStyles from './styles';
import List from './List/List';

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expence Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" valiant="h5">total balance $100</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5rem', marginTop: '20px' }}>

                    try saying: Add income for $100 in Category Salary for Monday
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main

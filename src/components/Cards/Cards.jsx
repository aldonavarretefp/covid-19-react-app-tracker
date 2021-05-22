import React from 'react';
import {Card, CardContent, Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup'; 
import cx from 'classnames';

import styles from './Cards.module.css';

// Getting the properties
const Cards = ({data:{ confirmed, recovered, deaths, lastUpdate}}) =>{
    console.log(confirmed)
    if(!confirmed){
        return "Loading...";
    }
    return(
        <div className = {styles.container}>
            {/* Container */}
            <Grid container spacing = {3} justify = "center">
                {/* Card Component 1*/}
                <Grid item component = {Card} xs = {12} md = {3}className = {cx(styles.card,styles.infected)} >
                    <CardContent>
                        {/* Paragraph, heading... */}
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp
                            start={0}
                            end ={confirmed.value}
                            duration ={2.5}
                            separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">Last Update: { new Date(lastUpdate).toDateString()} at { new Date(lastUpdate).toTimeString().substring(0,8)}</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                {/* Card Component 2*/}
                <Grid item component = {Card}  xs = {12} md = {3}className = {cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = "h5">
                            <CountUp
                            start={0}
                            end ={recovered.value}
                            duration ={2.5}
                            separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">Last Update: { new Date(lastUpdate).toDateString()} at { new Date(lastUpdate).toTimeString().substring(0,8)}</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                {/* Card Component 3*/}
                <Grid item component = {Card}  xs = {12} md = {3}className = {cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom >Deaths</Typography>
                        <Typography variant = "h5">
                            <CountUp
                            start={0}
                            end ={deaths.value}
                            duration ={2.5}
                            separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">Last Update: { new Date(lastUpdate).toDateString()} at { new Date(lastUpdate).toTimeString().substring(0,8)}</Typography>
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards
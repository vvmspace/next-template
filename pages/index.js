import axios from 'axios';
import config from '../config';
import Layout from "../components/Layout";
import { Typography, Grid } from '@material-ui/core';
const { api_url } = config;
import Head from "next/head";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EventCard from "../components/EventCard";

const Post = props => {

    const { top, weekly, weekends } = props;

    return (
        <Layout>
            <Head>
                <title> concert.moscow - билеты на концерты в Москве без наценки и сервисного сбора</title>
            </Head>
            <Typography gutterBottom variant="h3" component="h1">
                Концерты в Москве
            </Typography>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography gutterBottom variant="h4" component="h2">
                    На этих выходных
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                        {weekends
                            .sort((event1, event2) => (new Date(event1.date).getTime() > new Date(event2.date).getTime() && 1 || -1))
                            .map(event => (
                                <Grid item xs={12} sm={4} md={2}><EventCard event={event} key={event.uuid} /></Grid>
                            ))}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography gutterBottom variant="h4" component="h2">
                    На этой неделе
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                        {weekly
                            .sort((event1, event2) => (new Date(event1.date).getTime() > new Date(event2.date).getTime() && 1 || -1))
                            .map(event => (
                                <Grid item xs={12} sm={4} md={2}><EventCard event={event} key={event.uuid} /></Grid>
                            ))}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography gutterBottom variant="h4" component="h2">
                    Top-30
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                        {top
                            .sort((event1, event2) => (new Date(event1.date).getTime() > new Date(event2.date).getTime() && 1 || -1))
                            .map(event => (
                                <Grid item xs={12} sm={4} md={2}><EventCard event={event} key={event.uuid} /></Grid>
                            ))}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Layout>
    );
};

Post.getInitialProps = async function() {

    const res = await axios.get(`${api_url}/api/v1/event/`);
    const {top, weekly, weekends} = res.data;


    return {
        top,
        weekly,
        weekends
    };
};

export default Post;
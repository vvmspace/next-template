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
import A from '../components/A';
import EventCard from "../components/EventCard";
import EventCardList from "../components/EventCardList";

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
                    <Typography gutterBottom variant="h4" component="h2">
                    <A href={'/weekends'}>На этих выходных</A>
                    </Typography>
                    <EventCardList events={weekends.slice(6)} showVenue={true} />
                    <Typography gutterBottom variant="h4" component="h2">
                        <A href={'/weekly'}>На этой неделе</A>
                    </Typography>
                    <EventCardList events={weekly.slice(0,6)} showVenue={true} />
                    <Typography gutterBottom variant="h4" component="h2">
                        <A href={'/top'}>Top</A>
                    </Typography>
                    <EventCardList events={top.slice(0,6)} showVenue={true} />
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

import axios from 'axios';
import config from '../config';
import Layout from "../components/Layout";
import { Typography, Grid } from '@material-ui/core';
const { api_url, theme } = config;

import {makeStyles} from "@material-ui/core/styles";
import Head from "next/head";
import A from '../components/A';
import EventCard from "../components/EventCard";
import EventCardList from "../components/EventCardList";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    link: {
        color: '#448b00',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
}));

const Post = props => {

    const classes = useStyles(config.theme);

    const { top, weekly, weekends, ssr } = props;

    return (
        <Layout>
            <Head>
                <title> concert.moscow - билеты на концерты в Москве без наценки и сервисного сбора</title>
                <meta httpEquiv={'description'} content={'Самые ожидаемые концерты 2020 года'} />
            </Head>
            <Typography gutterBottom variant="h3" component="h1">
                Концерты в Москве
            </Typography>
            <Typography variant={'subtitle1'} component={'p'}>Афиша всех <noindex>(или почти всех)</noindex> концертов Москвы. Билеты без наценок и сервисного сбора. Что может быть лучше?</Typography>
            {(weekends.length > 0) && (<>
                    <Typography gutterBottom variant="h4" component="h2" style={{marginTop: 20}}>
                    <a className={classes.link} href={'/weekends'}>На этих выходных</a>
                    </Typography>
                    <EventCardList sliding={true} events={weekends.slice(6)} showVenue={true} />
                    <Divider/></>)}
                    {(weekly.length > 0) && (<>
                    <Typography gutterBottom variant="h4" component="h2" style={{marginTop: 20}}>
                        <a className={classes.link} href={'/weekly'}>На этой неделе</a>
                    </Typography>
                    <EventCardList sliding={true} events={weekly.slice(0,6)} showVenue={true} />
                    <Divider/></>)}
                    {(ssr.length > 0) && (<>
                    <Typography gutterBottom variant="h4" component="h2" style={{marginTop: 20}}>
                        Выбор редакции
                    </Typography>
                    <EventCardList sliding={true} events={ssr} showVenue={true} />
                    <Divider/></>)}
                    <Typography gutterBottom variant="h4" component="h2" style={{marginTop: 20}}>
                        <A className={classes.link} href={'/top'}>Самые ожидаемые концерты 2020 года</A>
                    </Typography>
                    <EventCardList sliding={true} events={top.slice(0,12)} showVenue={true} />
            <Divider/>
        </Layout>
    );
};

Post.getInitialProps = async function() {

    const res = await axios.get(`${api_url}/api/v1/event/`);
    // const {top, weekly, weekends} = res.data;


    return res.data;
};

export default Post;

import axios from 'axios';
import config from '../../config';
import Layout from "../../components/Layout";
import { Typography, Grid } from '@material-ui/core';
const { api_url } = config;
import Head from "next/head";

import EventCard from "../../components/EventCard";

const Post = props => {

    const { event } = props;
    const { venue, name } = event;

    const isConcert = event.category.includes('Концерт') || event.description.includes('Концерт');

    const date_formatted = new Date(event.date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/Moscow'
    });

    return (
        <Layout>
            <Head>
                <title>Концерты {event.name} в Москве {date_formatted}</title>
            </Head>
            <Typography variant="h3" component="h1" gutterBottom>
                {isConcert && 'Концерт '}{name} в Москве
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Стоимость билетов на {isConcert && 'концерт '}{name} в {event.venue.name}:
            </Typography>
            <Typography variant="subtitle2" component="p" gutterBottom>
                По данным от {new Date(event.updatedAt).toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                // minute: 'numeric',
                timeZone: 'Europe/Moscow'
            })} <b>цена билета</b> {
                (event.min_price === event.max_price)
                && (<>составляет <b>{event.min_price}₽</b></>)
                || (<>находится в диапазоне от <b>{event.min_price}</b> ₽ до <b>{event.max_price}</b> ₽</>)}
            </Typography>


            {JSON.stringify(event)}
        </Layout>
    );
};

Post.getInitialProps = async function({ query }) {

    const { alias } = query;


    const res = await axios.get(`${api_url}/api/v1/event/${alias}`);
    const event = res.data;

    return {
        event
    };
};

export default Post;
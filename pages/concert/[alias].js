import React from 'react';
import axios from 'axios';
import config from '../../config';
import Layout from "../../components/Layout";
import { Typography, Grid } from '@material-ui/core';
import Head from "next/head";
import Button from "@material-ui/core/Button";

import EventCard from "../../components/EventCard";
import Container from "@material-ui/core/Container";
const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
const { api_url } = config;

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

    const goPnm = event => () => (typeof window !== 'undefined') && window.open(event.url + '?promote=concertmoscow') || (() => {});

    return (
        <Layout>
            <Head>
                <title>Концерты {event.name} в Москве {date_formatted}</title>
            </Head>
            <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                {isConcert && 'Концерт '}{name} в Москве
            </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={event.image && event.image.replace('218x161', '654x483') || '/cm.png'} style={{width: '100%', height: 'auto'}} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h5" component="h2" gutterBottom align={'justify'}>
                            Место проведения {isConcert && 'концерта '}{name} в Москве:
                        </Typography>
                        <Typography variant="subtitle2" component="p" gutterBottom>
                            <a href={`/${event.venue.alias}`}>{event.venue.name}</a>, {event.venue.address}
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom align={'justify'}>
                            Стоимость билетов на {isConcert && 'концерт '}{name} в {event.venue.name}:
                        </Typography>
                        <Typography variant="subtitle2" component="p" gutterBottom>
                            По данным от {new Date(event.updatedAt).toLocaleString('ru', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            // minute: 'numeric',
                            timeZone: 'Europe/Moscow'
                        })} <b>цена билета</b> {
                            (event.min_price === event.max_price)
                            && (<>составляет <b>{event.min_price}₽</b></>)
                            || (<>находится в диапазоне от <b>{event.min_price}</b> ₽ до <b>{event.max_price}</b> ₽</>)}
                        </Typography>
                        <div align={'right'} style={{paddingTop: 20}}>
                            <Button variant="contained" color="primary" onClick={goPnm(event)}>
                                Купить билет от {event.min_price} ₽
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} xl={12}>
                        <Typography align={'justify'} component={'div'} variant={'body1'}>{((typeof window !== 'undefined') || (event.SSR)) && renderHTML(event.description.replace(event.name, `<b>${event.name}</b>`)) || ''}</Typography>
                    </Grid>

                </Grid>

            </Container>
            {/*{JSON.stringify(event)}*/}
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
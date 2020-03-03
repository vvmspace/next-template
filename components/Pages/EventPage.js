import React from 'react';
import axios from 'axios';
import config from '../../config';
import Layout from "../../components/Layout";
import { Typography, Grid } from '@material-ui/core';
import Head from "next/head";
import Button from "@material-ui/core/Button";
import YandexShare from 'react-yandex-share';
import EventJSONLd from "../JSONLd/EventJSONLd";

import Container from "@material-ui/core/Container";
const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
const { api_url } = config;
import Error from "next/error";

const Event = props => {

    const { event, errorCode } = props;
    if (errorCode) {
        return (<Error statusCode={errorCode} />);
    }
    if (!event) {
        return (<Error statusCode={404} />);
    }
    const { name } = event;

    const isConcert = event.category.includes('Концерт') || event.description.includes('Концерт');
    const addConcert = isConcert && (!event.name.includes('концерт'));

    const date_formatted = new Date(event.date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Europe/Moscow'
    });

    const start_time = new Date(event.date).toLocaleString('ru', {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/Moscow'
    });

    const goPnm = event => () => (typeof window !== 'undefined') && window.open(`${event.url}?promote=${event.ref_code || 'concertmoscow'}`) || (() => {});

    return (
        <Layout overlay={
            <a style={{position: 'fixed', bottom: 0, left: 0, right:0, display: 'block', width: '100%', textAlign: 'center', textTransform: 'uppercase', color: "black", backgroundColor: 'white', border: '1px solid black', textDecoration: 'none', padding: 7}} href={'#'} onClick={goPnm(event)}>Купить билеты</a>
        }>
            <Head>
                <title>{addConcert && 'Концерт ' || ''}{event.name} в Москве {date_formatted} | concert.moscow - купить билеты без наценки и сервисного сбора</title>
                <meta httpEquiv={'description'} content={`Купить билеты на ${addConcert && 'концерт ' || ''}${event.name} в ${event.venue.name}  без наценки и сервисного сбора`}/>
                <meta httpEquiv={'keywords'} content={`${event.name} в ${event.venue.name}, ${event.name} в Москве, ${event.name} ${date_formatted}, ${event.name}`}/>
                <link rel={'canonical'} href={event.ssr && `https://concert.moscow/${event.alias || event.uuid}` || `https://concert.moscow/concert/${event.alias || event.uuid}`} />
                <EventJSONLd event={event} />
            </Head>
            <Container>
                <Typography variant={(name.length > 20) && 'h5' || 'h3'} component="h1" gutterBottom>
                    {addConcert && 'Концерт ' || ''}{name} в Москве
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={event.image && event.image.replace('218x161', '654x483') || '/cm.png'} style={{width: '100%', height: 'auto'}} /> <YandexShare/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography style={{marginTop: 20}} variant="h5" component="h2">{name} {date_formatted}</Typography>
                        <Typography variant="subtitle2" component="p">Начало {isConcert && 'концерта' || 'мероприятия'}: {start_time}, подходите заблаговременно</Typography>
                        {(event.age > 0) && (<Typography variant="subtitle2" component="p">Возрастное ограничение: {event.age}+</Typography>)}
                        <Typography style={{marginTop: 20}} variant="h5" component="h2" gutterBottom align={'justify'}>
                            Место проведения {addConcert && 'концерта ' || ''}{name} в Москве:
                        </Typography>
                        <Typography variant="subtitle2" component="p" gutterBottom>
                            <a href={`/${event.venue.alias}`}>{event.venue.name}</a>, {event.venue.address}
                        </Typography>
                        <Typography variant="h5" style={{marginTop: 20}} component="h2" gutterBottom align={'justify'}>
                            Стоимость билетов на {addConcert && 'концерт ' || ''}{name} в {event.venue.name}:
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
                        <Typography variant="h5" component="h3">Билеты дорожают и заканчиваются</Typography>
                        <Typography variant="subtitle2" component="p" gutterBottom>
                            Не забывайте о том, что по мере приближения <strong>{date_formatted}</strong> билеты могут подорожать или закончиться.
                        </Typography>
                        <div align={'right'} style={{paddingTop: 20}}>
                            <Button variant="contained" color="primary" onClick={goPnm(event)}>
                                Купить билет от {event.min_price} ₽
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} xl={12}>
                        <Typography align={'justify'} component={'div'} variant={'body1'}>{
                            ((typeof window !== 'undefined') || (event.ssr)) && renderHTML(event.description
                                .replace(event.name, `<strong>${event.name}</strong>`)
                            ) || ''}</Typography>
                    </Grid>

                </Grid>

            </Container>
            {/*{JSON.stringify(event)}*/}
        </Layout>
    );
};

// Event.getInitialProps = async function({ query }) {
//
//     const { alias } = query;
//
//
//     try {
//         const res = await axios.get(`${api_url}/api/v1/event/${alias}`);
//         const event = res.data;
//
//
//
//         return {
//             event
//         };
//     } catch (e) {
//         return { errorCode: 502 };
//     }
//
// };

export default Event;

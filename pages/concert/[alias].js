import React from 'react';
import axios from 'axios';
import config from '../../config';
import Layout from "../../components/Layout";
import { Typography, Grid } from '@material-ui/core';
import Head from "next/head";
import Button from "@material-ui/core/Button";
import YandexShare from 'react-yandex-share';
import EventJSONLd from "../../components/JSONLd/EventJSONLd";

import Container from "@material-ui/core/Container";
const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
const { api_url } = config;
import Error from "next/error";
import EventPage from "../../components/Pages/EventPage";

const Event = props => {

    const { event, errorCode } = props;
    if (errorCode) {
        return (<Error statusCode={errorCode} />);
    }
    return (<EventPage event={props.event}/>);
    );
};

Event.getInitialProps = async function({ query }) {

    const { alias } = query;


    try {
        const res = await axios.get(`${api_url}/api/v1/event/${alias}`);
        const event = res.data;



        return {
            event
        };
    } catch (e) {
        return { errorCode: 502 };
    }

};

export default Event;

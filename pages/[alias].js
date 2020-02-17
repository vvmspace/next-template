import axios from 'axios';
import config from '../config';
import Layout from "../components/Layout";
import { Typography, Grid } from '@material-ui/core';
const { api_url } = config;
import Head from "next/head";

import EventCard from "../components/EventCard";

const Post = props => {

    const { venue } = props;
    const { name, address, events } = venue;

    return (
      <Layout>
          <Head>
              <title>Концерты в {name} | concert.moscow - билеты на концерты в Москве без наценки и сервисного сбора</title>
          </Head>
          <Typography variant="h2" component="h1" gutterBottom>
              {name}
          </Typography>
          <Typography variant="subtitle" component="p" gutterBottom>
              {address}
          </Typography>
          <Typography variant="h4" component="p" gutterBottom>
              Концерты в {name}
          </Typography>
          <Grid container spacing={2}>
          {events
              .sort((event1, event2) => (new Date(event1.date).getTime() > new Date(event2.date).getTime() && 1 || -1))
              .map(event => (
              <Grid item sm={2}><EventCard event={event} /></Grid>
          ))}
          </Grid>
      </Layout>
    );
  };

Post.getInitialProps = async function({ query }) {

    const { alias } = query;


    const res = await axios.get(`${api_url}/api/v1/venue/${alias}`);
    const venue = res.data;
  
    console.log(`Show data fetched. Count: ${venue.events.length}`);
  
    return {
        venue
    };
  };

export default Post;
import axios from 'axios';
import config from '../config';
import Layout from "../components/Layout";
import EventCardList from "../components/EventCardList";
import { Typography, Divider } from '@material-ui/core';
const { api_url } = config;
import Head from "next/head";
import { titleCase } from "title-case";

const Post = props => {

    const { venue } = props;
    const { name:_name, address, events } = venue;
    const name = titleCase(_name);
    const sorted = {
        events: events
            .filter(event => new Date(event.date) > new Date())
            .sort(
            (event1, event2) =>
            (new Date(event1.date).getTime() > new Date(event2.date).getTime() && 1 || -1))
    };

    return (
      <Layout>
          <Head>
              <title>Концерты в {name} | concert.moscow - билеты на концерты в Москве без наценки и сервисного сбора</title>
          </Head>
          <Typography variant="h2" component="h1" gutterBottom>
              {name}
          </Typography>
          <Typography variant="subtitle1" component="p" gutterBottom>
              {address}
          </Typography>
          <Typography variant="h4" component="p" gutterBottom>
              Концерты в {name}
          </Typography>
          <Typography variant="subtitle1" component="p" gutterBottom>
              Благодаря нашим партнёрам вы можете <b>купить билеты на концерты в {name} без наценки и сервисного сбора</b>
          </Typography>
          <Divider/>
          <EventCardList events={sorted.events} />
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

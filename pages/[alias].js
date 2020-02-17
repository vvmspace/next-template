import axios from 'axios';
import config from '../config';
const { api_url } = config;

const Post = props => {

    const { venue } = props;
    const { name, address, events } = venue;

    return (
      <div>
          <h1>{name}</h1>
        <p>{address}</p>
        <h2>Концерты в {venue.name}</h2>
          {events.map(event => (
              <div>
                  <h3>{event.name}</h3>
                  <div>{(event.min_price == event.max_price) && `${event.min_price} руб.` || `от ${event.min_price} до ${event.max_price} руб.`}</div>
                  <img src={event.image} />
              </div>
          ))}
      </div>
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
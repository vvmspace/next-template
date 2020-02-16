import { useRouter } from 'next/router';
import axios from 'axios';

const Post = props => {

    const { venue } = props;
    const { name, address, events } = venue;

    return (
      <div>
          <h1>{name}</h1>
        <p>{address}</p>
        <h2>Концерты в {venue.name}</h2>
          {events.map(event => (
              <div><h3>{event.name}</h3></div>
          ))}
      </div>
    );
  }

Post.getInitialProps = async function({ query }) {

    const { alias } = query;


    const res = await axios.get(`http://vvm.space:7007/api/v1/venue/${alias}`);

//    const res = await fetch(`http://vvm.space:7007/api/v1/venue/${alias}`);
    const venue = res.data;
  
    console.log(`Show data fetched. Count: ${venue.events.length}`);
  
    return {
        venue
    };
  };

export default Post;
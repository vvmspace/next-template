import { useRouter } from 'next/router';
import axios from 'axios';

const Post = props => {
    return (
      <div>
        <h1>{JSON.stringify(props.data)}</h1>
        <p>This is the blog post content.</p>
      </div>
    );
  }

Post.getInitialProps = async function({ query }) {

    const { alias } = query;


    const res = axios.get(`http://vvm.space:7007/api/v1/venue/${alias}`);

//    const res = await fetch(`http://vvm.space:7007/api/v1/venue/${alias}`);
    const data = res;
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      data
    };
  };

export default Post;
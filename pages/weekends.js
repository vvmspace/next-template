import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Концерты в Москве на этих выходных',
    full_title: 'Концерты в Москве на этих выходных',
    variations: ['рэп', 'rap'],
    keywords: ['rap', 'рэп', 'hip-hop', 'хип-хоп'],
};

const Rap = props => (<GenrePage events={props.events} attrs={attrs}/>);

Rap.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/weekends`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Rap;

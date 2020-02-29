import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Рэп и хип-хоп концерты',
    variations: ['рэп', 'rap'],
    keywords: ['rap', 'рэп', 'hip-hop', 'хип-хоп'],
    metatags: {
        description: 'Рэп концерты в Москве 2020. Официальные билеты без наценки и сервисного сбора.',
        keywords: 'рэп, rap, hip-hop, хип-хоп'
    }

};

const Rap = props => (<GenrePage events={props.events} attrs={attrs}/>);

Rap.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/rap`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Rap;

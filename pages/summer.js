import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Концерты в Москве этим летом',
    full_title: 'Концерты в Москве этим летом',
    variations: ['рэп', 'rap'],
    keywords: ['rap', 'рэп', 'hip-hop', 'хип-хоп'],
    subtitle: 'Планируйте лето заранее',
};

const Genre = props => (<GenrePage events={props.events} attrs={attrs}/>);

Genre.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/summer`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Rap;

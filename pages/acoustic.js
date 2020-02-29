import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Акустические концерты',
    variations: ['Electro', 'elec'],
    keywords: ['акустика', 'acoustic', 'акустические концерты'],
    description: 'Лучшие акустические концерты а Москве',
};

    const Genre = props => (<GenrePage events={props.events} attrs={attrs}/>);

Genre.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/acoustic`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Genre;

import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Рок-концерты',
    variations: ['рок', 'rock'],
    keywords: ['рок', 'панк-рок', 'рок концерты', 'рок-концерты', 'слэм', 'бош'],
};

const Rock = props => (<GenrePage events={props.events} attrs={attrs}/>);

Rock.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/rock`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Rock;

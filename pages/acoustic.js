import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Акустические концерты',
    variations: ['акустика', 'акустические концерты'],
    keywords: ['акустика', 'acoustic', 'акустические концерты'],
    description: 'Акустические концерты в Москве. Акуистические билеты без наценки и сервисного сбора',
    metatags: {
        description: 'Акустические концерты в Москве. Акуистические билеты без наценки и сервисного сбора',
        keywords: 'акустика, acoustic, акустические концерты'
    }
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

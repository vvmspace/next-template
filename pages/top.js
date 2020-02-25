import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Концерты в Москве: Top 100 | concert.moscow - билеты без наценки и сервисного сбора',
    variations: ['поп', 'pop'],
    keywords: ['поп', 'попса', 'поп концерты', 'дискотеки'],
};

const Pop = props => (<GenrePage events={props.events} attrs={attrs}/>);

Pop.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/pop`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Pop;

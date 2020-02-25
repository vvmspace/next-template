import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Самые ожидаемые концерты 2020',
    description: 'Купить билеты на самые крутые масштабные и ожидаемые концерты в Москве 2020',
    variations: ['поп', 'pop'],
    keywords: ['крутые концерты', 'ожидаемые концерты', 'поп концерты', 'дискотеки'],
};

const Pop = props => (<GenrePage events={props.events} attrs={attrs}/>);

Pop.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/top`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Pop;

import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Поп концерты и дискотеки',
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

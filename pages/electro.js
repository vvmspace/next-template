import GenrePage from "../components/GenrePage/GenrePage";
import axios from "axios";

const attrs = {
    title: 'Электронная музыка',
    variations: ['Electro', 'elec'],
    keywords: ['electro', 'drum', 'house', 'electro house', 'trance'],
    description: 'Купить билеты на концерты и фестивали электронной музыки в Москве',
    rp: 'электронной музыки',
    metatags: {
        description: 'Electro, Electro House, Trance, Progressive House - тусовки и концерты в Москве',
        keywords: 'Electro, Electro House, Trance, Progressive House'
    }
};

const Genre = props => (<GenrePage events={props.events} attrs={attrs}/>);

Genre.getInitialProps = async function() {

    const res = await axios.get(`https://api.concert.moscow/api/v1/event/electro`).catch(e => log(e));

    console.log(res);

    return {
        events: res && res.data && res.data.events || [],
    };
};

export default Genre;

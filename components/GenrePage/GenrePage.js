import Layout from "../Layout";
import Typography from "@material-ui/core/Typography";
import EventCardList from "../EventCardList";
import Head from 'next/head';

export default props => {
    const {attrs, events} = props;

    const withSSR = events.filter(event => event.ssr);

    return (<Layout>
        <Head>
            <title>{attrs.title} в Москве {new Date().getFullYear()}</title>
        </Head>
        {/*{JSON.stringify(props)}*/}
        <Typography variant={'h3'} component={'h1'}>{attrs.full_title || (<>{attrs.title} в Москве {new Date().getFullYear()}</>)}</Typography>
        <Typography variant={'subtitle1'} component={'p'}>{attrs.subtitle || attrs.description || `Купить билеты на ${attrs.rp || attrs.title.toLowerCase()} без наценки и сервисного сбора`}</Typography>
        <Typography variant={'body1'} component={'p'}>{attrs.body || ''}</Typography>
        {(withSSR.length > 0) && (<>
            <Typography variant={'h4'} style={{paddingTop: 20}} component={'h2'}>Выбор редакции</Typography>
            <EventCardList sliding showVenue events={withSSR}/>
            <Typography variant={'h4'} style={{paddingTop: 20}} component={'h2'}>Все события</Typography>
        </>)}
        <EventCardList showVenue events={events}/>
    </Layout>);
}

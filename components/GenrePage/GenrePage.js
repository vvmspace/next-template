import Layout from "../Layout";
import Typography from "@material-ui/core/Typography";
import EventCardList from "../EventCardList";
import Head from 'next/head';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    subTitle: {
        marginTop: 20,
        marginBottom: 10,
    }
});

export default props => {
    const {attrs, events, metatags:_meta} = props;
    const withSSR = events.filter(event => event.ssr);

    const classes = useStyles();
    return (<Layout>
        <Head>
            <title>{attrs.full_title || attrs.title} | concert.moscow - билеты на самые ожидаемые концерты в Москве {new Date().getFullYear()} без наценки и сервисного сбора</title>
            {_meta && _meta.description && (<meta httpEquiv={'description'} content={_meta.description}/>)}
            {_meta && _meta.keywords && (<meta httpEquiv={'keywords'} content={_meta.keywords}/>)}
        </Head>
        <Typography variant={'h3'} component={'h1'}>{attrs.full_title || (<>{attrs.title} в Москве {new Date().getFullYear()}</>)}</Typography>
        <Typography variant={'subtitle1'} component={'p'}>{attrs.subtitle || attrs.description || `Купить билеты на ${attrs.rp || attrs.title.toLowerCase()} без наценки и сервисного сбора`}</Typography>
        <Typography variant={'body1'} component={'p'}>{attrs.body || ''}</Typography>
        {(withSSR.length > 0) && (<>
            <Typography className={classes.subTitle} variant={'h4'} component={'h2'}>Выбор редакции</Typography>
            <EventCardList sliding showVenue events={withSSR}/>
            <Typography className={classes.subTitle} variant={'h4'} style={{paddingTop: 20}} component={'h2'}>Все события</Typography>
        </>)}
        <EventCardList showVenue events={events}/>
    </Layout>);
}

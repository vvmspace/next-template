import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import A from '../A';
import config from "../../config";
import { EventJsonLd } from "next-seo";
const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 345,

    },
    media: {
        height: 140,
    },
    button: {
        color: theme.palette.primary.main,
    },
    eventName: {
        height: 64,
        overflow: 'hidden',
    },
    venueName: {
        height: 37,
        overflow: 'hidden',
    },
    aWrap: {
        '&:hover': {
            textDecoration: 'none',
        }
    }
}));

const EventCard = props => {
    const classes = useStyles(config.theme);

    const {event, showVenue} = props;

    const {description} = event || {};
    const link = `/concert/${event.alias || event.uuid}`;

    const d = new Date(event.date);

    const pretty_date = d.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/Moscow'
    });

    const goPnm = event => () => (typeof window !== 'undefined') && window.open(event.url + '?promote=concertmoscow') || (() => {});

    const jevent = {
        "@context": "https://www.schema.org",
        "@type": "Event",
        name: event.name,
        startDate: event.date,
        endDate: new Date(event.end_date).toISOString().split('T')[0],
        location: {
            "@type": "Place",
            name: event.venue.name,
            sameAs: `https://concert.moscow/${event.venue.alias}`,
            address: {
            streetAddress: event.venue.address,
                addressLocality: 'Moscow',
                addressRegion: 'Moscow region'
        },
    },
    offers: {
        "@type": "Offer",
        description: "без наценки и сервисного сбора",
        url: `https://concert.moscow/concert/${event.alias || event.uuid}`,
        price: event.min_price,
        priceCurrency : "RUB",
        availability: event.has_eticket && (new Date() < new Date(event.date)),
        validFrom: new Date(event.updatedAt).toISOString(),
    },
    url: `https://concert.moscow/concert/${event.alias || event.uuid}`,
    description: `Билеты без наценки и сервисного сбора от ${event.min_price} ₽`
    }

    if (event.image) {
        jevent.image = event.image;
    }
    return (
        <Card className={classes.root} style={{width: '100%'}} key={props.key}>
            {renderHTML(`<script type='application/ld+json'>${JSON.stringify(jevent)}</script>`)}
            {/*<EventJsonLd*/}
            {/*    name={event.name}*/}
            {/*    startDate={event.date}*/}
            {/*    // endDate={event.end_date}*/}
            {/*    location={{*/}
            {/*        name: event.venue.name,*/}
            {/*        sameAs: `https://concert.moscow/${event.venue.alias}`,*/}
            {/*        address: {*/}
            {/*            streetAddress: event.venue.address,*/}
            {/*            addressLocality: 'Moscow',*/}
            {/*            addressRegion: 'Moscow region'*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    url={`https://concert.moscow/concert/${event.alias || event.uuid}`}*/}
            {/*    description={`Билеты без наценки и сервисного сбора от ${event.min_price} ₽`}*/}
            {/*/>*/}
            <CardActionArea key={props.key}>
                <A key={props.key} className={classes.aWrap} href={link}><CardMedia
                    className={classes.media}
                    image={event.image || '/cm.png'}
                    title={`Концерт ${event.name} в Москве ${new Date(event.date).getFullYear()}`}
                    key={props.key}
                />
                <CardContent key={props.key}>
                    <Typography gutterBottom variant={"h5"} component="h3" className={classes.eventName} key={props.key}>
                        <A key={props.key}
                            href={link}
                            title={`Купить билеты на концерт ${event.name} в Москве ${pretty_date} без наценки от ${event.min_price} рублей`}>{
                                event && event.name && ((event.name.length < 20) && event.name || event.name.substr(0, 60).split(' и ')[0])}</A>
                    </Typography>
                    {showVenue
                     && (<Typography key={props.key} gutterBottom variant="subtitle2" component="p"  className={classes.venueName}><A href={`/${event.venue.alias}`}>{event.venue.name}</A></Typography>)}
                    <Typography gutterBottom variant="subtitle1" component="p" key={props.key}>
                        {pretty_date}{(event.age > 0) && `, ${event.age}+`}
                    </Typography>
                </CardContent></A>
            </CardActionArea>
            <CardActions key={props.key}>
                <Button key={props.key} size="small" style={{color: config.theme.palette.primary.main}} onClick={goPnm(event)}>
                    Билеты {(event.max_price !== event.min_price) && `от ${event.min_price} ₽` || `по ${event.min_price} ₽`}
                </Button>
                <Button rel={'nofollow'} key={props.key} size="small" style={{color: config.theme.palette.primary.main}} href={link}>
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;

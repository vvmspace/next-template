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

const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 140,
    },
    button: {
        color: theme.palette.primary.main,
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

    return (
        <Card className={classes.root} style={{width: '100%'}}>
            <CardActionArea>
                <A href={link}><CardMedia
                    className={classes.media}
                    image={event.image || '/cm.png'}
                    title={`Концерт ${event.name} в Москве`}
                /></A>
                <CardContent>
                    <Typography gutterBottom variant={"h5"} component="h2">
                        <A href={link} title={`Купить билеты на концерт ${event.name} в Москве ${pretty_date} без наценки от ${event.min_price} рублей`}>{event && event.name && event.name.substr(0, 60)}</A>
                    </Typography>
                    {showVenue
                     && (<Typography gutterBottom variant="subtitle2" component="h2"><A href={`/${event.venue.alias}`}>{event.venue.name}</A></Typography>)}
                    <Typography gutterBottom variant="subtitle1" component="h2">
                        {pretty_date}, {event.age}+
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" style={{color: config.theme.palette.primary.main}} onClick={goPnm(event)}>
                    Билеты {(event.max_price !== event.min_price) && `от ${event.min_price} ₽` || `по ${event.min_price} ₽`}
                </Button>
                <Button size="small" style={{color: config.theme.palette.primary.main}} href={link}>
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;
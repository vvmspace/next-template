import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import A from '../A';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const EventCard = props => {
    const classes = useStyles();

    const {event} = props;
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
        <Card className={classes.root}>
            <CardActionArea>
                <A href={link}><CardMedia
                    className={classes.media}
                    image={event.image.replace('218x161', '436x322')}
                    title={`Концерт ${event.name} в Москве`}
                /></A>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <A href={link} title={`Купить билеты на концерт ${event.name} в Москве ${pretty_date} без наценки от ${event.min_price} рублей`}>{event.name}</A>
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h2">
                        <A href={link}>{pretty_date}, {event.age}+</A>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={goPnm(event)}>
                    Билеты {(event.max_price !== event.min_price) && `от ${event.min_price} ₽` || `по ${event.min_price} ₽`}
                </Button>
                <Button size="small" color="primary" href={link}>
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;
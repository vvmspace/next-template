import Grid from '@material-ui/core/Grid';
import EventCard from '../EventCard';

const EventCardList = props => {
    const { events, showVenue } = props;

    return <Grid  container spacing={2}>{events
    .sort((event1, event2) => (new Date(event1.date).getTime() > new Date(event2.date).getTime() && 1 || -1))
    .map(event => (
    <Grid item xs={12} sm={6} lg={3} xl={2} md={3}><EventCard showVenue={showVenue} event={event} key={event.uuid} /></Grid>))}</Grid>
};

export default EventCardList;
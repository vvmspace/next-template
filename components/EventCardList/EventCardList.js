import 'react';
import Grid from '@material-ui/core/Grid';
import EventCard from '../EventCard';
import Slider from "../Slider";
import {makeStyles} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
    theGrid: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    theSlider: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    }
}));

const EventCardList = props => {
    const {events, showVenue} = props;
    const classes = useStyles();


    return (<>
        {/*<Hidden only={props.sliding && 'xs' || []}>*/}
            <Grid className={props.sliding && classes.theGrid} container spacing={1}>{events
                .sort((event1, event2) => (new Date(event1.date).getTime() > new Date(event2.date).getTime() && 1 || -1))
                .map(event => (
                    <Grid item xs={12} sm={6} lg={3} xl={2} md={3}><EventCard showVenue={showVenue} event={event}
                                                                              key={event.uuid}/></Grid>))}
            </Grid>
        {/*</Hidden>*/}
        {props.sliding && (<Hidden only={props.sliding && ['sm','md','lg','xl'] || ['xs','sm','md','lg','xl']}>
            <Slider className={classes.theSlider} elements={events.map(event => (<EventCard showVenue={showVenue} event={event}
                                                              key={event.uuid}/>))}/>
        </Hidden>)}
    </>);
}

export default EventCardList;

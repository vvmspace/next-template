import 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from "./MenuItem";

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

const topLinks = [{
        text: 'Сегодня',
        href: '/today',
    },{
        text: 'Завтра',
        href: '/tomorrow',
    },{
        text: 'На выходных',
        href: '/weekends',
    },{
        text: 'Неделя',
        href: '/weekly',
    },{
        text: 'Top',
        href: '/top',
    },
];

const bottomLinks = [{
        text: 'Rock',
        href: '/rock',
    },{
        text: 'Rap',
        href: '/rap',
    },{
        text: 'Pop',
        href: '/pop',
    },{
        text: 'Jazz',
        href: '/jazz',
    },{
        text: 'Акустика',
        href: '/acoustic',
    },
];

const Menu = props => {
    const classes = useStyles();
    return (<div className={classes.list}>
        <List>
            {topLinks.map(({text, href}) => (
                <MenuItem text={text} href={href} />
            ))}
        </List>
        <Divider />
        <List>
            {bottomLinks.map(({text, href}) => (
                <MenuItem text={text} href={href} />
            ))}
        </List>
    </div>)
};

export default Menu;

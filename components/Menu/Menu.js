import 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';

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
        icon: <WhatshotIcon color={'red'}/>,
    },{
        text: 'Rap & Hip-Hop',
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
            {topLinks.map(({text, href, icon}) => (
                <MenuItem text={text} href={href} icon={icon} />
            ))}
        </List>
        <Divider />
        <List>
            {bottomLinks.map(({text, href, icon}) => (
                <MenuItem text={text} href={href} icon={icon} />
            ))}
        </List>
    </div>)
};

export default Menu;

import 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

const venuesLinks = [{
    text: 'Главклуб',
    href: '/glavclub',
    icon: <WhatshotIcon style={{color: 'red'}}/>,
}];

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
        <MenuList items={venuesLinks} />
        <Divider />
        <MenuList items={topLinks} />
        <Divider/>
        <MenuList items={bottomLinks} />
    </div>)
};

export default Menu;

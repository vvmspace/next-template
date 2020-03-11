import 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";
import A from '../A';

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

const tr = arr => arr[new Date().getHours() % arr.length];

const links = [

    {   title: 'Горячее',
        items: [{
            text: 'Top',
            href: '/top',
            icon: <WhatshotIcon style={{color: 'red'}}/>,
        },{
            text: 'Главклуб',
            href: '/glavclub',
            icon: <WhatshotIcon style={{color: 'red'}}/>,
        },

            tr([{
            text: 'Scooter',
            href: '/scooter',
            icon: <WhatshotIcon style={{color: 'red'}}/>,
        },{
            text: 'Сергей Безруков',
            href: '/sergej-bezrukov-march-29-2020',
            icon: <WhatshotIcon style={{color: 'red'}}/>,
        },{
            text: 'Чиж и Ко',
            href: '/chizh-i-co',
            icon: <WhatshotIcon style={{color: 'red'}}/>,
        },{
            text: 'Кино',
            href: '/kino',
            icon: <WhatshotIcon style={{color: 'red'}}/>,
        },{
            text: 'СерьГа',
            href: '/serga-may-29-2020',
            icon: <WhatshotIcon style={{color: 'red'}}/>,
        },])

        ],
    },

    {
        title: 'По дням',
        items: [{
            text: 'На неделе',
            href: '/weekly',
        }, {
            text: 'На выходных',
            href: '/weekends',
        }, {
            text: 'Лето 2020',
            href: '/summer',
        },]
    },

    {   title: 'По жанрам',
        items: [{
            text: 'Акустика',
            href: '/acoustic',
        },{
            text: 'Rock',
            href: '/rock',
        },{
            text: 'Rap & Hip-Hop',
            href: '/rap',
        },{
            text: 'Pop',
            href: '/pop',
        },{
            text: 'Electro',
            href: '/electro',
            icon: <BatteryChargingFullIcon style={{color: 'red'}}/>,
            style: {background: '#448b00', color: 'white', fontWeight: 'bold'}
        },]
    },];

const Menu = props => {
    const classes = useStyles();
    return (<div className={classes.list}>
        <List><A href={'/'}><ListItem button key={props.text}>
            <img style={{height: 24, marginTop: 2, marginBottom: 2, marginRight: 32}} src='/favicon.ico'/><ListItemText style={{fontWeight: 'bold'}} primary={(<>concert<span style={{color: '#448b00'}}>.moscow</span></>)} />
        </ListItem></A></List>
        <Divider/>
        {links.map(links => (<>
            <MenuList title={links.title} items={links.items} />
            <Divider/>
        </>))}
    </div>)
};

export default Menu;

import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import NavBar from "./NavBar";
import Menu from './Menu';
import Footer from "./Footer";
import { makeStyles } from '@material-ui/core/styles';

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            // backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            // backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('lg')]: {
            // backgroundColor: green[500],
        },
    },
    covid: {
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'red',
        color: 'white',
        padding: '7px 0',
    },
    covidLink: {
        color: 'white',
        ':visited': {
            color: 'white',
        }
    },
    inliner: {
        display: 'inline-block',
    }
}));

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};

const Layout = props => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        menuOpened: false,
        alertOpen: true,
        alertMessage: 'Сайт в разработке!',
    });

    const openMenu = () => {
        setTimeout(() => {
            setState({
                menuOpened: true,
            });
        }, 0);
    }

    const closeMenu = () => {
        return setState({
            menuOpened: false,
        })
    }

    return (
        <div onClick={closeMenu}>
            <NavBar menuToggler={openMenu} />
            <div className={classes.covid}>
                <span className={classes.inliner}><a className={classes.covidLink} href={"/coronavirus"}>Предупреждение о коронавирусе:</a>&nbsp;</span>
                <span className={classes.inliner}>Сайт работает в автономном режиме.&nbsp;</span>
                <span className={classes.inliner}>Актуальную информацию смотрите на странице заказа билетов.&nbsp;</span>
            </div>
            <Drawer anchor={"left"} open={state.menuOpened}>
                <Menu/>
            </Drawer>
            <div className={classes.root}>
                {props.children}
            </div>
            { props.overlay }
            <Footer/>
        </div>
    )};

export default Layout;

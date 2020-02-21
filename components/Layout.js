import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import React from 'react';
import NavBar from "./NavBar";
import Menu from './Menu';
import Footer from "./Footer";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/core/Collapse";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
        <SwipeableDrawer anchor={"left"} open={state.menuOpened} onOpen={e =>e } onClose={e =>e }>
            <Menu/>
        </SwipeableDrawer>
        <div className={classes.root}>
            {props.children}
        </div>
        <Footer/>
    </div>
)};

export default Layout;

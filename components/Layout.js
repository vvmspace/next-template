import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import NavBar from "./NavBar";
import Menu from './Menu';
const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};

const Layout = props => {

    const [state, setState] = React.useState({
        menuOpened: false,
    });

    const toggleMenu = () => {
        return setState({
            menuOpened: !state.menuOpened,
        })
    }

    return (
    <div onClick={toggleMenu}>
        <NavBar menuToggler={toggleMenu} />
        <Drawer anchor={"left"} open={state.menuOpened}>
            <Menu/>
        </Drawer>
        <div className="Content">
            {props.children}
        </div>
    </div>
)};

export default Layout;

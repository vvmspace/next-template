import Header from "./Header";
import NavBar from "./NavBar";

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

const Layout = props => (
    <>
        <NavBar />
        <div className="Content">
            {props.children}
        </div>
    </>
);

export default Layout;

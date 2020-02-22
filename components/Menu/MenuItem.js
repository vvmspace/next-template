import 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ListItemText from "@material-ui/core/ListItemText";
import A from '../A';

export default props => (<A href={props.href || '#'}><ListItem style={props.style} button key={props.text}>
    <ListItemIcon>{props.icon || (<ArrowRight/>)}</ListItemIcon>
    <ListItemText primary={props.text} />
</ListItem></A>);

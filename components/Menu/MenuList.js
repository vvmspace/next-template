import 'react';
import List from '@material-ui/core/List';
import MenuItem from "./MenuItem";
import {ListItemText, ListItem} from "@material-ui/core";

export default props => (<List>{<>
    {props.title && (
        <ListItem>
            <ListItemText><strong>{props.title}</strong></ListItemText>
        </ListItem>
    )}
    {props.items && props.items.map(({text, href, icon, iconColor, title}) => (
        <MenuItem text={text} href={href.includes('http') && href || `https://concert.moscow${href}`} icon={icon} iconColor={iconColor} title={title || text}/>
    ))}
</>}</List>);
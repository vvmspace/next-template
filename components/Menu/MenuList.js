import 'react';
import List from '@material-ui/core/List';
import MenuItem from "./MenuItem";

export default props => (<List>{
    props.items && props.items.map(({text, href, icon, iconColor, title}) => (
        <MenuItem text={text} href={href.includes('http') && href || `https://concert.moscow${href}`} icon={icon} iconColor={iconColor} title={title || text}/>
    ))
}</List>);
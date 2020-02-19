import 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

const Menu = props => {
    const classes = useStyles();
    return (<div className={classes.list}>
        <List>
            {['Сегодня', 'Завтра', 'На выходных', 'Неделя'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><ArrowRight/></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Rock', 'Rap', 'Pop', 'Jazz'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><ArrowRight/></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>)
};

export default Menu;

import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: '#448b00',
        }
    }
}))

export default {
    api_url: process.env.API_URL || 'http://localhost:7007',
    theme,
};
import 'react';
import Link from '@material-ui/core/Link';

const A = props => (<Link href={props.href} color="inherit" title={props.title || ''} className={props.className}>{props.children}</Link> )
export default A;
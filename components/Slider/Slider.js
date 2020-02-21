import ReactSwipe from 'react-swipe';

export default props => (<ReactSwipe
    className={props.className}
    swipeOptions={props.swipeOptions
    || { continuous: true }}>{
        props.elements.map(el => (<div>{el}</div>))
}</ReactSwipe>)
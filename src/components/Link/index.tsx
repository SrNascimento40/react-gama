import "./styles.css"
import {Link as LinkRouter} from "react-router-dom"

interface linkProps{
    text:string;
    redirect:string;
}

function Link (props: linkProps) {
    return (
        <LinkRouter to={props.redirect} >
            {props.text}
        </LinkRouter>
    )
}

export default Link;

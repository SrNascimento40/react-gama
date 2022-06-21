import "./style.css"

interface boxProps {
    background: string;
    children: JSX.Element;
}

export default function Box (props: boxProps) {
    return <section className={`box ${props.background}`}>{props.children}</section>
}

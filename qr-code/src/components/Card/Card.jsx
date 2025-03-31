import { CardText } from "../CardText/CardText";
import { QR } from "../QR/QR";
import "./Card.css";

export const Card = () => {
    return (
        <div id="card">
            <QR/>
            <CardText/>
        </div>
    )
}
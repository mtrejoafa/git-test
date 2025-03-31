import "./QR.css";
import qrImage from "../../images/image-qr-code.png";

export const QR = () => {
    return (
        <img src={qrImage} alt="QR Code" id="img"/>
    );
}
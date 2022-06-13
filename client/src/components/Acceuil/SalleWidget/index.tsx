import style from './style.module.css';
import SalleIcon from '../../../assets/icons/Acceuil/SalleIcon.svg';

export default function SalleWidget() {
    return (
        <div className={style.SalleWidget}>
            <img src={SalleIcon} alt="" />
            <div className={style.text}>
                <h1>4</h1>
                <h2>En attente</h2>
            </div>
        </div>
    );
}

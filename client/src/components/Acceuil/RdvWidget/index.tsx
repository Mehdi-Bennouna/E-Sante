import style from './style.module.css';
import RdvIcon from '../../../assets/icons/Acceuil/RdvIcon.svg';

export default function RdvWidget() {
    return (
        <div className={style.RdvWidget}>
            <img src={RdvIcon} alt="" />
            <div className={style.text}>
                <h1>8/11</h1>
                <h2>Rendez-vous</h2>
            </div>
        </div>
    );
}

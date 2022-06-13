import style from './style.module.css';
import ExaminationIcon from '../../../assets/icons/Acceuil/ExaminationIcon.svg';

export default function ExaminationWidget() {
    return (
        <div className={style.ExaminationWidget}>
            <img src={ExaminationIcon} alt="" />
            <div className={style.text}>
                <h1>Alaa BENNOUNA</h1>
                <h2>En examination</h2>
                <h1>20 min</h1>
            </div>
        </div>
    );
}

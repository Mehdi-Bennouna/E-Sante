import style from './style.module.css';

export default function Acceuil() {
    return (
        <div className={style.Acceuil}>
            <h1 className={style.title}>Acceuil</h1>
            <div className="rdv_widget"></div>
            <div className="attente_widget"></div>
            <div className="examination_widget"></div>
            <div className="salle_widget"></div>
        </div>
    );
}

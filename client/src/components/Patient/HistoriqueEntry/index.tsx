import style from "./style.module.css";

export default function HistoriqueEntry() {
    return (
        <div className={style.HistoriqueEntry}>
            <h1>09/06/2022</h1>
            <div className={style.btn}>Mesure</div>
            <div className={style.btn}>Ordonnance</div>
            <div className={style.btn}>Fiche d'observation</div>
            <div className={style.btn}>Facture</div>
            <p>Commentaire sur le rendez-vous </p>
        </div>
    );
}

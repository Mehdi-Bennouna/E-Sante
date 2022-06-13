import HistoriqueEntry from "../HistoriqueEntry";
import style from "./style.module.css";

export default function HistoriqueWidget() {
    return (
        <div className={style.HistoriqueWidget}>
            <h1>Historique</h1>
            <div className={style.scroll}>
                <HistoriqueEntry />
                <HistoriqueEntry />
                <HistoriqueEntry />
                <HistoriqueEntry />
                <HistoriqueEntry />
                <HistoriqueEntry />
                <HistoriqueEntry />
                <HistoriqueEntry />
                <HistoriqueEntry />
            </div>
        </div>
    );
}

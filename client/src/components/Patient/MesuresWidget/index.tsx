import style from "./style.module.css";

export default function MesuresWidget() {
    return (
        <div className={style.MesuresWidget}>
            <h1>Mesures</h1>
            <h2>
                Poids : <span>55 kg</span>
            </h2>
            <h2>
                Taille : <span>135 cm</span>
            </h2>
            <h2>
                Tension : <span>-</span>
            </h2>
            <h2>
                FC : <span>-</span>
            </h2>
            <h2>
                IMC : <span>-</span>
            </h2>
            <h2>
                PAS : <span>-</span>
            </h2>
            <h2>
                PAD : <span>-</span>
            </h2>
            <h2>
                PAS : <span>-</span>
            </h2>
        </div>
    );
}

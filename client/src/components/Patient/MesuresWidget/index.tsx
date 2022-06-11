import style from "./style.module.css";
export default function MesuresWidget() {
    return (
        <div className={style.MesuresWidget}>
            <h1>Mesures</h1>
            <div className={style.content}>
                <h2>
                    Poids : <span>74kg</span>
                </h2>
                <h2>
                    Tension : <span>44</span>
                </h2>
                <h2>
                    somethign : <span>ston</span>
                </h2>
            </div>
        </div>
    );
}

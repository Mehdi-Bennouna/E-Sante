import style from "./style.module.css";

export default function MesuresWidget() {
    return (
        <div className={style.MesuresWidget}>
            <h1>Mesures</h1>
            <h2>
                Poids : <span>74kg</span>
            </h2>
            <h2>
                Tension : <span>tson</span>
            </h2>
            <h2>
                Age : <span>22</span>
            </h2>
            <h2>
                okay : <span>stosnr</span>
            </h2>
        </div>
    );
}

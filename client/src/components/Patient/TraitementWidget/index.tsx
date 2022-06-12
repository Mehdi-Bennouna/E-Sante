import style from "./style.module.css";

export default function TraitementWidget() {
    return (
        <div className={style.TraitementWidget}>
            <h1>Traitement</h1>
            <div className={style.traitement}>
                <h2>Retrofilazol</h2> <span>du</span> <h2>22/10/2000</h2>{" "}
                <span>au</span> <h2>22/10/2000</h2>
            </div>
            <div className={style.traitement}>
                <h2>Retrofilazol</h2> <span>du</span> <h2>22/10/2000</h2>{" "}
                <span>au</span> <h2>22/10/2000</h2>
            </div>
        </div>
    );
}

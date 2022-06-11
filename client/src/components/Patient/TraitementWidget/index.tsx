import style from "./style.module.css";

export default function TraitementWidget() {
    return (
        <div className={style.TraitementWidget}>
            <h1>Traitement</h1>
            <ul>
                <li>
                    Something du <span>22/10/2000</span> au{" "}
                    <span>22/10/2000</span>
                </li>
                <li>
                    Something du <span>22/10/2000</span> au{" "}
                    <span>22/10/2000</span>
                </li>
            </ul>
        </div>
    );
}

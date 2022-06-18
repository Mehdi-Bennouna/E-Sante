import style from "./style.module.css";

export default function MesuresWidget({ mesure }: any) {
    return (
        <div className={style.MesuresWidget}>
            <h1>Mesures</h1>
            <h2>
                Poids : <span>{mesure.poids > 0 ? mesure.poids : "- "} kg</span>
            </h2>
            <h2>
                Taille :{" "}
                <span>{mesure.taille > 0 ? mesure.taille : "- "} cm</span>
            </h2>
            <h2>
                Tension :{" "}
                <span>{mesure.tension > 0 ? mesure.tension : "- "}</span>
            </h2>
            <h2>
                FC : <span>{mesure.fc > 0 ? mesure.fc : "- "}bpm</span>
            </h2>
            <h2>
                IMC : <span>{mesure.imc > 0 ? mesure.imc : "-"}</span>
            </h2>
            <h2>
                PAS : <span>{mesure.pas > 0 ? mesure.pas : "-"}</span>
            </h2>
            <h2>
                PAD : <span>{mesure.pad > 0 ? mesure.pad : "-"}</span>
            </h2>
        </div>
    );
}

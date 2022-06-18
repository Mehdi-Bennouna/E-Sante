import moment from "moment";
import style from "./style.module.css";

export default function TraitementWidget({ traitements }: any) {
    let traitementsRender;
    if (traitements.length > 0) {
        traitementsRender = traitements.map((traitement: any) => {
            if (traitement.actif) {
                return (
                    <>
                        <h2>{traitement.nom}</h2> <span>du</span>{" "}
                        <h2>{moment(traitement.debut).format("yyyy/MM/DD")}</h2>{" "}
                        <span>au</span>{" "}
                        <h2>{moment(traitement.fin).format("yyyy/MM/DD")}</h2>
                    </>
                );
            }
        });
    } else {
        traitementsRender = "Aucun traitement en cours";
    }
    return (
        <div className={style.TraitementWidget}>
            <h1>Traitement</h1>
            <div className={style.traitement}>
                <h2>{traitementsRender}</h2>
            </div>
        </div>
    );
}

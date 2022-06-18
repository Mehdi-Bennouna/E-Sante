import moment from "moment";
import style from "./style.module.css";

export default function InfoWidget({ informations }: any) {
    return (
        <div className={style.InfoWidget}>
            <h1>Informations & Contacts</h1>
            <div className={style.info}>
                <div className={style.line}>
                    <h2>
                        Nom : <span>{informations.nom}</span>
                    </h2>

                    <h2>
                        Prenom : <span>{informations.prenom}</span>
                    </h2>
                </div>

                <div className={style.line}>
                    <h2>
                        Date de naissance :{" "}
                        <span>
                            {moment(informations.ddn).format("yyyy/MM/DD")}
                        </span>
                    </h2>

                    <h2>
                        Sexe : <span>{informations.sexe}</span>
                    </h2>
                </div>
            </div>
            <hr />
            <div className={style.contacts}>
                <div className={style.line}>
                    <h2>
                        Téléphone : <span>{informations.tel}</span>
                    </h2>
                    <h2>
                        E-Mail : <span>{informations.email}</span>
                    </h2>
                </div>
                <div className={style.line}>
                    <h2>
                        Addresse : <span>{informations.addresse}</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

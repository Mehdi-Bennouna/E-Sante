import style from "./style.module.css";

export default function InfoWidget() {
    return (
        <div className={style.InfoWidget}>
            <h1>Informations & Contacts</h1>
            <div className={style.line}>
                <h2>
                    Nom : <span>BENNOUNA</span>
                </h2>
                <h2>
                    Prenom : <span>Mehdi</span>
                </h2>
            </div>

            <div className={style.line}>
                <h2>
                    Age : <span>22</span>
                </h2>
                <h2>
                    Poid : <span>74kg</span>
                </h2>
                <h2>
                    Sexe : <span>Homme</span>
                </h2>
            </div>

            <hr />

            <div className={style.line}>
                <h2>
                    Telephone : <span>0562099072</span>
                </h2>
                <h2>
                    E-mail : <span>mehdi.m.bennouna@gmail.com</span>
                </h2>
            </div>

            <div className={style.line}>
                <h2>
                    Addresse :{" "}
                    <span>22, Hammou Boutlilis, Ain El Bya, Oran</span>
                </h2>
            </div>
        </div>
    );
}

import style from "./style.module.css";

export default function InfoWidget() {
    return (
        <div className={style.InfoWidget}>
            <h1>Informations & Contacts</h1>
            <div className={style.info}>
                <div className={style.line}>
                    <h2>
                        Nom : <span>BENNOUNA</span>
                    </h2>

                    <h2>
                        Prenom : <span>Alaa</span>
                    </h2>
                </div>

                <div className={style.line}>
                    <h2>
                        Date de naissance : <span>22/10/2000</span>
                    </h2>

                    <h2>
                        Sexe : <span>Homme</span>
                    </h2>
                </div>
            </div>
            <hr />
            <div className={style.contacts}>
                <div className={style.line}>
                    <h2>
                        Téléphone : <span>0562099072</span>
                    </h2>
                    <h2>
                        E-Mail : <span>alaa.bennouna@gmail.com</span>
                    </h2>
                </div>
                <div className={style.line}>
                    <h2>
                        Addresse :{" "}
                        <span>20 bd, Hammou Boutlilis, Ain El Bya, Oran </span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

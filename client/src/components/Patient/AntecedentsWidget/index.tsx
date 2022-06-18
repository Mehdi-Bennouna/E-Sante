import style from "./style.module.css";
import editIcon from "../../../assets/icons/Patient/goBackIcon.svg";

export default function AntecedentsWidget({
    antecedents,
    setAntecedentsShown,
}: any) {
    return (
        <div className={style.AntecedentsWidget}>
            <div className={style.top}>
                <h1>Antecedents</h1>
                <img
                    src={editIcon}
                    alt=""
                    onClick={() => setAntecedentsShown(true)}
                />
            </div>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.alergies}>
                        <h2>Alergies</h2>
                        {antecedents.alergies.length > 0 ? (
                            antecedents.alergies.map(
                                (alergie: any, key: any) => {
                                    return (
                                        <ul>
                                            <li key={key}>- {alergie}</li>
                                        </ul>
                                    );
                                },
                            )
                        ) : (
                            <ul>
                                <li></li>
                            </ul>
                        )}
                    </div>
                    <div className={style.intolerences}>
                        <h2>intolerences</h2>
                        {antecedents.intolerences.length > 0 ? (
                            antecedents.intolerences.map(
                                (intolerence: any, key: any) => {
                                    return (
                                        <ul>
                                            <li key={key}>- {intolerence}</li>
                                        </ul>
                                    );
                                },
                            )
                        ) : (
                            <ul>
                                <li></li>
                            </ul>
                        )}
                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.chroniques}>
                        <h2>chroniques</h2>

                        {antecedents.chroniques.length > 0 ? (
                            antecedents.chroniques.map(
                                (chronique: any, key: any) => {
                                    return (
                                        <ul>
                                            <li>- {chronique}</li>
                                        </ul>
                                    );
                                },
                            )
                        ) : (
                            <ul>
                                <li key={"0"}></li>
                            </ul>
                        )}
                    </div>
                    <div className={style.familiaux}>
                        <h2>familiaux</h2>
                        {antecedents.familiaux.length > 0 ? (
                            antecedents.familiaux.map(
                                (familial: any, key: any) => {
                                    return (
                                        <ul>
                                            <li>- {familial}</li>
                                        </ul>
                                    );
                                },
                            )
                        ) : (
                            <ul>
                                <li></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

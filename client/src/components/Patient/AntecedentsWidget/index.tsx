import style from "./style.module.css";

export default function AntecedentsWidget({ antecedants }: any) {
    return (
        <div className={style.AntecedentsWidget}>
            <h1>Antecedants</h1>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.alergies}>
                        <h2>Alergies</h2>
                        {antecedants.alergies.length > 0 ? (
                            antecedants.alergies.map(
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
                        {antecedants.intolerences.length > 0 ? (
                            antecedants.intolerences.map(
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

                        {antecedants.chroniques.length > 0 ? (
                            antecedants.chroniques.map(
                                (chronique: any, key: any) => {
                                    return (
                                        <ul>
                                            <li key={key}>- {chronique}</li>
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
                    <div className={style.familiaux}>
                        <h2>familiaux</h2>
                        {antecedants.familiaux.length > 0 ? (
                            antecedants.familiaux.map(
                                (familial: any, key: any) => {
                                    return (
                                        <ul>
                                            <li key={key}>- {familial}</li>
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

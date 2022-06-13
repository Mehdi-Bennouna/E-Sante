import style from "./style.module.css";

export default function AntecedentsWidget() {
    return (
        <div className={style.AntecedentsWidget}>
            <h1>Antecedants</h1>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.alergies}>
                        <h2>Alergies</h2>
                        <ul>
                            <li>- Pollen</li>
                        </ul>
                    </div>
                    <div className={style.intolerences}>
                        <h2>intolerences</h2>
                        <ul></ul>
                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.chroniques}>
                        <h2>chroniques</h2>
                        <ul></ul>
                    </div>
                    <div className={style.familiaux}>
                        <h2>familiaux</h2>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

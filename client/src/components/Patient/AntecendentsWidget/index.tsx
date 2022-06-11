import style from "./style.module.css";

export default function AntecedentsWidget() {
    return (
        <div className={style.AntecedentsWidget}>
            <h1>Antecedents</h1>

            <div className={style.content}>
                <div className={style.left}>
                    <div>
                        <h2>Intolerences</h2>
                        <ul>
                            <li>- one</li>
                            <li>- two</li>
                            <li>- three</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Alergies</h2>
                        <ul>
                            <li>- one</li>
                            <li>- two</li>
                            <li>- three</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>Chroniques</h2>
                        <ul>
                            <li>- one</li>
                            <li>- two</li>
                            <li>- three</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Familiaux</h2>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

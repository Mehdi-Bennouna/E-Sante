import style from "./style.module.css";
import goBackIcon from "../../assets/icons/Patient/goBackIcon.svg";
import InfoWidget from "../../components/Patient/InfoWidget";
import AntecedentsWidget from "../../components/Patient/AntecedentsWidget";
import MesuresWidget from "../../components/Patient/MesuresWidget";
import TraitementWidget from "../../components/Patient/TraitementWidget";
import HistoriqueWidget from "../../components/Patient/HistoriqueWidget";

export default function Patient() {
    return (
        <div className={style.Patient}>
            <div className={style.title}>Details Patient</div>
            <main>
                <div className={style.go_back}>
                    <img src={goBackIcon} alt="" />
                    <h3>Retour</h3>
                </div>

                <div className={style.content}>
                    <div className={style.left}>
                        <InfoWidget />
                        <div className={style.down}>
                            <AntecedentsWidget />
                            <MesuresWidget />
                        </div>
                    </div>

                    <div className={style.right}>
                        <TraitementWidget />
                        <HistoriqueWidget />
                    </div>
                </div>
            </main>
        </div>
    );
}

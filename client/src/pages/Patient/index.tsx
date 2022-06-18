import style from "./style.module.css";
import goBackIcon from "../../assets/icons/Patient/goBackIcon.svg";
import InfoWidget from "../../components/Patient/InfoWidget";
import AntecedentsWidget from "../../components/Patient/AntecedentsWidget";
import MesuresWidget from "../../components/Patient/MesuresWidget";
import TraitementWidget from "../../components/Patient/TraitementWidget";
import HistoriqueWidget from "../../components/Patient/HistoriqueWidget";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Patient() {
    const navigate = useNavigate();
    const userId = useParams().id!;

    const [informations, setInformation] = useState(null);
    const [antecedants, setAntecedants] = useState(null);
    const [mesure, setMesure] = useState(null);
    const [traitements, setTraitements] = useState(null);

    const fetchInformations = async (id: string) => {
        const info = (
            await axios.get(`http://localhost:3001/api/patients/${userId}`)
        ).data;

        setInformation(info);
    };

    const fetchAntecedants = async (id: string) => {
        const antecedants = (
            await axios.get(`http://localhost:3001/api/antecedants/${userId}`)
        ).data;

        setAntecedants(antecedants);
    };

    const fetchMesure = async (id: string) => {
        const mesure = (
            await axios.get(`http://localhost:3001/api/mesures/${userId}`)
        ).data[0];

        setMesure(mesure);
    };

    const fetchTraitements = async (id: string) => {
        const traitements = (
            await axios.get(`http://localhost:3001/api/traitement/${userId}`)
        ).data;

        setTraitements(traitements);
    };

    useEffect(() => {
        fetchInformations(userId);
        fetchAntecedants(userId);
        fetchMesure(userId);
        fetchTraitements(userId);
    }, []);

    return (
        <div className={style.Patient}>
            <div className={style.title}>Details Patient</div>
            <main>
                <div
                    className={style.go_back}
                    onClick={() => navigate("/Patients")}
                >
                    <img src={goBackIcon} alt="" />
                    <h3>Retour</h3>
                </div>

                <div className={style.content}>
                    <div className={style.left}>
                        {informations && (
                            <InfoWidget informations={informations} />
                        )}
                        <div className={style.down}>
                            {antecedants && (
                                <AntecedentsWidget antecedants={antecedants} />
                            )}
                            {mesure && <MesuresWidget mesure={mesure} />}
                        </div>
                    </div>

                    <div className={style.right}>
                        {traitements && (
                            <TraitementWidget traitements={traitements} />
                        )}
                        <HistoriqueWidget />
                    </div>
                </div>
            </main>
        </div>
    );
}

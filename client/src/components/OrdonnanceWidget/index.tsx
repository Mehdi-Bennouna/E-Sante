import { Button, TextField } from "@mui/material";
import { useState } from "react";
import style from "./style.module.css";
import backIcon from "../../assets/icons/ModificationAntecedents/goBackIcon.svg";
import validerIcon from "../../assets/icons/ModificationAntecedents/validerIcon.svg";

export default function OrdonnanceWidget({ docs, setDocs, setShowOrd }: any) {
    const [nom, setNom]: [any, any] = useState("");
    const [posologie, setPosologie]: [any, any] = useState("");
    const [ord, setOrd]: [any, any] = useState({
        type: "ordonnance",
        data: [],
    });

    const handleAjouter = () => {
        setOrd({
            type: "ordonnance",
            data: ord.data.concat([{ nom, posologie }]),
        });
        setNom("");
        setPosologie("");
    };

    const handleValider = () => {
        setDocs(docs.concat([ord]));
        setOrd({ type: "ordonnance", data: [] });
        setShowOrd(false);
    };

    const handleBack = () => {
        setOrd({ type: "ordonnance", data: [] });
        setShowOrd(false);
    };
    //medicament = {nom, posologie}
    return (
        <div className={style.OrdonnanceWidget}>
            <div className={style.buttons}>
                <div className={style.back} onClick={handleBack}>
                    <img src={backIcon} alt="" />
                    <h3>Annuler</h3>
                </div>

                <div className={style.valider} onClick={handleValider}>
                    <h3>Valider</h3>
                    <img src={validerIcon} alt="" />
                </div>
            </div>

            <div className={style.title}>Ordonnance</div>

            {ord.data.map((element: any, index: any) => {
                return (
                    <div key={index} className={style.meds}>
                        <div className={style.med}>
                            <h3>{element.nom} :</h3>
                            <h4>{element.posologie}</h4>
                        </div>
                    </div>
                );
            })}

            <hr />

            <div className={style.add_med}>
                <div className={style.nom}>
                    <TextField
                        label="Nom"
                        sx={{ width: "450px" }}
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        sx={{ marginLeft: "30px" }}
                        size="large"
                        onClick={handleAjouter}
                    >
                        Ajouter
                    </Button>
                </div>

                <TextField
                    label="Posologie"
                    value={posologie}
                    onChange={(e) => setPosologie(e.target.value)}
                />
            </div>
        </div>
    );
}

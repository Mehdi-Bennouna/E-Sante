import { Button, TextField } from "@mui/material";
import { useState } from "react";
import style from "./style.module.css";
import backIcon from "../../assets/icons/ModificationAntecedents/goBackIcon.svg";
import validerIcon from "../../assets/icons/ModificationAntecedents/validerIcon.svg";

export default function FactureWidget({ setShowFact, docs, setDocs }: any) {
    const [service, setService]: [any, any] = useState("");
    const [montant, setMontant]: [any, any] = useState("");
    const [fact, setFact]: [any, any] = useState({ type: "Facture", data: [] });

    const handleAjouter = () => {
        setFact({
            type: "Facture",
            data: fact.data.concat([{ service, montant }]),
        });
        setService("");
        setMontant("");
    };
    const handleValider = () => {
        setDocs(docs.concat([fact]));
        setFact({ type: "Facture", data: [] });
        setShowFact(false);
    };
    const handleBack = () => {
        setFact({ type: "Facture", data: [] });
        setShowFact(false);
    };

    return (
        <div className={style.FactureWidget}>
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
            <div className={style.title}>Facture</div>

            {fact.data.map((element: any, index: any) => {
                return (
                    <div key={index} className={style.servs}>
                        <div className={style.serv}>
                            <h3>{element.service} :</h3>
                            <h4>{element.montant}</h4>
                        </div>
                    </div>
                );
            })}

            <hr />

            <div className={style.add_serv}>
                <div className={style.service}>
                    <TextField
                        label="Service"
                        sx={{ width: "450px" }}
                        value={service}
                        onChange={(e) => setService(e.target.value)}
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
                    label="Montant"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                />
            </div>
        </div>
    );
}

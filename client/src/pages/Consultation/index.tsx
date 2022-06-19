import style from "./style.module.css";
import validerIcon from "../../assets/icons/Consultation/validerIcon.svg";
import goBackIcon from "../../assets/icons/Consultation/goBackIcon.svg";
import { TextField } from "@mui/material";
import DocumentList from "../../components/DocumentList";
import OrdonnanceWidget from "../../components/OrdonnanceWidget";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FactureWidget from "../../components/FactureWidget";
export default function Consultation() {
    //Ordonnance = {id , data} / data = {[{nom, posologie}]}
    //Facture = {id , data}  / data = {[{service, montant}]}
    const { id } = useParams();
    const navigate = useNavigate();

    const [docs, setDocs]: [any, any] = useState([]);
    const [showOrd, setShowOrd]: [any, any] = useState(false);
    const [showFact, setShowFact]: [any, any] = useState(false);
    const [comment, setComment]: [any, any] = useState("");

    const handleSubmit = async () => {
        const consultation = (
            await axios.post("http://localhost:3001/api/consultations", {
                patientId: id,
                commentaire: comment,
            })
        ).data;

        docs.forEach(async (element: any) => {
            console.log(element);
            const temp = (
                await axios.post(
                    `http://localhost:3001/api/${element.type}s `,
                    {
                        data: JSON.stringify(element.data),
                        consultationId: consultation.id,
                    },
                )
            ).data;

            console.log(temp);

            navigate(`/Patients/${id}`);
        });

        console.log(consultation);
    };

    return (
        <div className={style.Consultation}>
            <div className={style.title}>Consultation</div>
            <main>
                <div className={style.buttons}>
                    <div className={style.go_back}>
                        <img src={goBackIcon} alt="" />
                        <h3>Retour</h3>
                    </div>

                    <div className={style.valider} onClick={handleSubmit}>
                        <h3>Valider</h3>
                        <img src={validerIcon} alt="" />
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.left}>
                        <h2>Documents</h2>
                        <div className={style.documents}>
                            <DocumentList
                                docs={docs}
                                setShowOrd={setShowOrd}
                                setShowFact={setShowFact}
                            />

                            <hr />

                            <TextField
                                label="Commentaire"
                                multiline
                                rows={3}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={style.right}>
                        {showOrd && (
                            <OrdonnanceWidget
                                docs={docs}
                                setDocs={setDocs}
                                setShowOrd={setShowOrd}
                            />
                        )}
                        {showFact && (
                            <FactureWidget
                                docs={docs}
                                setDocs={setDocs}
                                setShowFact={setShowFact}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

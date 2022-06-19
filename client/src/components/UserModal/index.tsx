import style from "./style.module.css";
import backIcon from "../../assets/icons/CreationPatient/goBackIcon.svg";
import validerIcon from "../../assets/icons/CreationPatient/validerIcon.svg";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function UserModal({ type, old, setIsShown, setOld }: any) {
    const [username, setUsername]: [any, any] = useState(old?.username || "");
    const [password, setPassword]: [any, any] = useState(old?.password || "");
    const [nom, setNom]: [any, any] = useState(old?.nom || "");
    const [prenom, setPrenom]: [any, any] = useState(old?.prenom || "");

    const handleSubmit = async () => {
        if (old) {
            await axios.put("http://localhost:3001/api/users", {
                id: old.id,
                username,
                password,
                nom,
                prenom,
                type: type,
            });
        } else {
            await axios.post("http://localhost:3001/api/users", {
                username,
                password,
                nom,
                prenom,
                type: type,
            });
        }

        setIsShown(false);
    };

    return (
        <div className={style.UserModal}>
            <h1 className={style.title}>
                {old
                    ? `Modification ${type.toLowerCase()}`
                    : `Creation ${type.toLowerCase()}`}
            </h1>
            <div className={style.buttons}>
                <div className={style.back} onClick={() => setIsShown(false)}>
                    <img src={backIcon} alt="" />
                    <h3>Annuler</h3>
                </div>

                <div className={style.valider} onClick={handleSubmit}>
                    <h3>Valider</h3>
                    <img src={validerIcon} alt="" />
                </div>
            </div>
            <div className={style.content}>
                <TextField
                    label="Nom d'utilisateur"
                    sx={{ width: "350px" }}
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <TextField
                    label="Mot de passe"
                    sx={{ width: "350px" }}
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <TextField
                    label="Nom"
                    sx={{ width: "350px" }}
                    value={nom}
                    onChange={(e) => {
                        setNom(e.target.value);
                    }}
                />
                <TextField
                    label="Prenom"
                    sx={{ width: "350px" }}
                    value={prenom}
                    onChange={(e) => {
                        setPrenom(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}

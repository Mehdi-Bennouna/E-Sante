import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import axios from "axios";
import { useState } from "react";
import backIcon from "../../../assets/icons/CreationPatient/goBackIcon.svg";
import validerIcon from "../../../assets/icons/CreationPatient/validerIcon.svg";
import style from "./style.module.css";

export default function PatientModal({ onClose, old }: any) {
    const today = new Date();

    const [nom, setNom] = useState(old?.nom || "");
    const [prenom, setPrenom] = useState(old?.prenom || "");
    const [sexe, setSexe] = useState(old?.sexe || "");
    const [ddn, setDdn] = useState(old?.ddn || today);
    const [telephone, setTelephone] = useState(old?.tel || "");
    const [email, setEmail] = useState(old?.email || "");
    const [addresse, setAddresse] = useState(old?.addresse || "");

    const handleSubmit = () => {
        const patient = {
            nom,
            prenom,
            sexe,
            ddn: ddn || new Date(ddn),
            tel: telephone,
            email,
            addresse,
        };

        if (old) {
            axios.put("http://localhost:3001/api/patients", {
                old: old,
                new: patient,
            });
        } else {
            axios.post("http://localhost:3001/api/patients", patient);
        }
        onClose();
    };

    return (
        <>
            <div className={style.PatientModal}>
                <h1 className={style.title}>
                    {old ? "Modification Patient" : "Creation Patient"}
                </h1>
                <div className={style.buttons}>
                    <div className={style.back} onClick={onClose}>
                        <img src={backIcon} alt="" />
                        <h3>Annuler</h3>
                    </div>

                    <div className={style.valider} onClick={handleSubmit}>
                        <h3>Valider</h3>
                        <img src={validerIcon} alt="" />
                    </div>
                </div>
                <div className={style.content}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <div className={style.line}>
                            <TextField
                                sx={{ width: "350px" }}
                                label="Nom"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                            />

                            <TextField
                                sx={{ width: "350px" }}
                                label="Prenom"
                                value={prenom}
                                onChange={(e) => {
                                    setPrenom(e.target.value);
                                }}
                            />
                        </div>

                        <div className={style.line}>
                            <FormControl sx={{ minWidth: "350px" }}>
                                <InputLabel>Sexe</InputLabel>
                                <Select
                                    label="Sexe"
                                    value={sexe}
                                    onChange={(e: SelectChangeEvent) => {
                                        setSexe(e.target.value);
                                    }}
                                >
                                    <MenuItem value="HOMME">Homme</MenuItem>
                                    <MenuItem value="FEMME">Femme</MenuItem>
                                </Select>
                            </FormControl>

                            <DesktopDatePicker
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        sx={{ width: "350px" }}
                                    />
                                )}
                                label="Date"
                                inputFormat="yyyy/MM/DD"
                                value={ddn}
                                onChange={(newDate) => {
                                    setDdn(newDate);
                                }}
                            />
                        </div>

                        <div className={style.line}>
                            <TextField
                                sx={{ width: "350px" }}
                                label="Telephone"
                                value={telephone}
                                onChange={(e) => {
                                    setTelephone(e.target.value);
                                }}
                            />
                            <TextField
                                sx={{ width: "350px" }}
                                label="E-Mail"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <TextField
                            fullWidth
                            label="Addresse"
                            value={addresse}
                            onChange={(e) => setAddresse(e.target.value)}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </>
    );
}

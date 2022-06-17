import { Autocomplete, TextField } from "@mui/material";
import {
    DesktopDateTimePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import axios from "axios";
import { useEffect, useState } from "react";
import backIcon from "../../../assets/icons/CreationRdv/goBackIcon.svg";
import validerIcon from "../../../assets/icons/CreationRdv/validerIcon.svg";
import style from "./style.module.css";

export default function RdvModal({ onClose, old }: any) {
    const today = new Date();
    const [options, setOption] = useState(old?.options || []);
    const [date, setDate] = useState(old?.date || today);
    const [motif, setMotif] = useState(old?.motif || "");
    const [patientId, setPatientId]: any = useState(old?.patientId || "");

    useEffect(() => {
        axios.get("http://localhost:3001/api/patients").then((response) => {
            setOption(
                response.data.map((element: any) => {
                    return {
                        label: `${element.nom} ${element.prenom}`,
                        id: element.id,
                    };
                }),
            );
        });
    }, []);

    const handleSubmit = () => {
        const rdv = {
            patientId: patientId,
            motif: motif,
            date: date,
        };

        if (old) {
            axios.put("http://localhost:3001/api/rdvs", {
                old: old,
                new: rdv,
            });
        } else {
            axios.post("http://localhost:3001/api/rdvs/", rdv);
        }
        onClose();
    };

    return (
        <>
            <div className={style.RdvModal}>
                <h1 className={style.title}>
                    {old ? "Modification Rendez-vous" : "Creation Rendez-vous"}
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
                        <Autocomplete
                            sx={{ width: "300px" }}
                            options={options}
                            renderInput={(params) => (
                                <TextField {...params} label="Patient" />
                            )}
                            onChange={(e, value: any) => {
                                setPatientId(value!.id);
                            }}
                        />

                        <TextField
                            label="Motif"
                            sx={{ width: "300px" }}
                            value={motif}
                            onChange={(e) => {
                                setMotif(e.target.value);
                            }}
                        />

                        <DesktopDateTimePicker
                            label="Date & Heure"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue!);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    sx={{ width: "300px" }}
                                    {...params}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </>
    );
}

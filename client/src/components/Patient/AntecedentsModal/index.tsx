import { Autocomplete, Chip, TextField } from "@mui/material";
import { useState } from "react";
import style from "./style.module.css";
import backIcon from "../../../assets/icons/ModificationAntecedents/goBackIcon.svg";
import validerIcon from "../../../assets/icons/ModificationAntecedents/validerIcon.svg";
import axios from "axios";

export default function AntecedentsModal({
    old,
    setAntecedentsShown,
    setAntecedents,
}: any) {
    const [alergies, setAlergies]: [any, any] = useState(old?.alergies || []);
    const [intolerences, setIntolerences]: [any, any] = useState(
        old?.intolerences || [],
    );
    const [chroniques, setChroniques]: [any, any] = useState(
        old?.chroniques || [],
    );
    const [familiaux, setFamiliaux]: [any, any] = useState(
        old?.familiaux || [],
    );

    const handleSubmit = () => {
        const newAntecedents = {
            alergies: alergies,
            intolerences: intolerences,
            chroniques: chroniques,
            familiaux: familiaux,
            patientId: old.patientId,
        };

        setAntecedents(newAntecedents);

        axios.put("http://localhost:3001/api/antecedents", newAntecedents);

        setAntecedentsShown(false);
    };

    return (
        <div className={style.AntecedentsModal}>
            <h1 className={style.title}>Modification Antecedents</h1>
            <div className={style.buttons}>
                <div
                    className={style.back}
                    onClick={() => setAntecedentsShown(false)}
                >
                    <img src={backIcon} alt="" />
                    <h3>Annuler</h3>
                </div>

                <div className={style.valider} onClick={handleSubmit}>
                    <h3>Valider</h3>
                    <img src={validerIcon} alt="" />
                </div>
            </div>
            <div className={style.inputs}>
                <Autocomplete
                    multiple
                    options={[]}
                    freeSolo
                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip
                                variant="outlined"
                                label={option}
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Alergies"
                        />
                    )}
                    onChange={(e, value) => {
                        setAlergies(value);
                    }}
                    value={alergies}
                />

                <Autocomplete
                    multiple
                    options={[]}
                    freeSolo
                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip
                                variant="outlined"
                                label={option}
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Intolerences"
                        />
                    )}
                    onChange={(e, value) => {
                        setIntolerences(value);
                    }}
                    value={intolerences}
                />

                <Autocomplete
                    multiple
                    options={[]}
                    freeSolo
                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip
                                variant="outlined"
                                label={option}
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Chroniques"
                        />
                    )}
                    onChange={(e, value) => {
                        setChroniques(value);
                    }}
                    value={chroniques}
                />

                <Autocomplete
                    multiple
                    options={[]}
                    freeSolo
                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip
                                variant="outlined"
                                label={option}
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Familiaux"
                        />
                    )}
                    onChange={(e, value) => {
                        setFamiliaux(value);
                    }}
                    value={familiaux}
                />
            </div>
        </div>
    );
}

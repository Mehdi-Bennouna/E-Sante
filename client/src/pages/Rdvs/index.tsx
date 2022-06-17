import { TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import newRdvIcon from "../../assets/icons/Rendez_vous/newRdv.svg";
import RdvsActions from "../../components/GridActions/RdvsActions";
import RdvModal from "../../components/Rdvs/RdvModal";
import style from "./style.module.css";

function formatDate(date: Date | string) {
    return moment(date).format("yyyy/MM/DD");
}

function formatHeure(date: Date) {
    return moment(date).format("hh:mm");
}

export default function Rdvs() {
    const today = formatDate(new Date());

    const [data, setData] = useState([]);
    const [date, setDate] = useState(today);
    const [isShown, setShown] = useState(false);
    const [old, setOld] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/api/rdvs/").then((response) => {
            setData(
                response.data
                    .filter((element: any) => {
                        const elementDate = formatDate(element.date);

                        if (elementDate === date) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    .map((element: any, index: any) => {
                        const date = formatDate(element.date);
                        const heure = formatHeure(element.date);

                        return {
                            id: index + 1,
                            rdvId: element.id,
                            nom: element.patient.nom,
                            prenom: element.patient.prenom,
                            sexe: element.patient.sexe,
                            telephone: element.patient.tel,
                            motif: element.motif,
                            date: date,
                            heure: heure,
                        };
                    }),
            );
        });
    }, [date, isShown]);

    const columns: GridColDef[] = [
        { field: "nom", headerName: "Nom", width: 200, type: "date" },
        { field: "prenom", headerName: "Prenom", width: 230 },
        { field: "telephone", headerName: "Telephone", width: 200 },
        { field: "motif", headerName: "Motif", width: 150 },
        { field: "date", headerName: "Date", width: 150 },
        { field: "heure", headerName: "Heure", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 200,
            align: "left",
            renderCell: (params) => {
                return (
                    <RdvsActions
                        row={params.row}
                        data={data}
                        setData={setData}
                        setOld={setOld}
                        setShown={setShown}
                    />
                );
            },
        },
    ];

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <div className={style.Rdvs}>
                <div className={style.title}>Rendez-vous</div>
                <main>
                    <div
                        className={style.add_rdv}
                        onClick={() => {
                            setShown(true);
                        }}
                    >
                        <img src={newRdvIcon} alt="" />
                        <h3>Créer Rendez-vous</h3>
                    </div>
                    <div className={style.table}>
                        <div className={style.date}>
                            <h2 className={style.nbRdv}>
                                {data && data.length} Rendez-vous pour le{" "}
                                <span className={style.blueDate}>
                                    {formatDate(date)}
                                </span>
                            </h2>
                            <DesktopDatePicker
                                label="Date"
                                inputFormat="yyyy/MM/DD"
                                value={date}
                                onChange={(newDate) => {
                                    setDate(formatDate(newDate!));
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </div>

                        <DataGrid
                            columns={columns}
                            rows={data}
                            hideFooterSelectedRowCount
                            disableSelectionOnClick
                            pageSize={11}
                            sx={{
                                height: "90%",
                                border: "none",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "16px",
                                lineHeight: "19px",
                                color: "#455560",
                                "& .MuiDataGrid-row:hover .invis": {
                                    visibility: "visible",
                                    backgroundColor: "#FAFAFB",
                                },
                                "& .MuiDataGrid-row:hover": {
                                    backgroundColor: "#FAFAFB",
                                },
                                "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
                                    outline: "none",
                                },
                            }}
                        />
                    </div>
                    {isShown && (
                        <RdvModal
                            onClose={() => {
                                setShown(false);
                                setOld(null);
                            }}
                            old={old}
                        />
                    )}
                </main>
            </div>
        </LocalizationProvider>
    );
}

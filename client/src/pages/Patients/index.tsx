import { DataGrid, frFR, GridColDef } from "@mui/x-data-grid";
import style from "./style.module.css";
import newFolderIcon from "../../assets/icons/Patients/newFolder.svg";
import PatientsActions from "../../components/GridActions/PatientsActions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { createTheme, ThemeProvider } from "@mui/material";
import PatientModal from "../../components/Patients/PatientModal";

export default function Patients() {
    const theme = createTheme({}, frFR);

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [isShown, setShown] = useState(false);
    const [old, setOld] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/api/patients").then((response) => {
            setData(
                response.data.map((element: any, index: any) => {
                    return {
                        id: index + 1,
                        nom: element.nom,
                        prenom: element.prenom,
                        age: "the age",
                        sexe: element.sexe,
                        telephone: element.tel,
                        nRdv: element.RendezVous[0]
                            ? moment(element.RendezVous[0].heure).format(
                                  "yyyy/MM/DD",
                              )
                            : "-",
                        pRdv: element.RendezVous[1]
                            ? moment(element.RendezVous[1].heure).format(
                                  "yyyy/MM/DD",
                              )
                            : "-",
                    };
                }),
            );
        });
    }, [isShown]);

    const columns: GridColDef[] = [
        { field: "nom", headerName: "Nom", width: 200 },
        { field: "prenom", headerName: "Prenom", width: 230 },
        { field: "age", headerName: "Age", width: 100 },
        { field: "sexe", headerName: "Sexe", width: 110 },
        { field: "telephone", headerName: "Téléphone", width: 150 },
        { field: "nRdv", headerName: "Prochin RDV", width: 150 },
        { field: "pRdv", headerName: "Dernier RDV", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 200,
            align: "left",
            renderCell: (params) => {
                return (
                    <PatientsActions
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

    const handleCreatePatient = () => {
        setShown(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={style.Patients}>
                <div className={style.title}>Patients</div>
                <main>
                    <div
                        className={style.add_patient}
                        onClick={handleCreatePatient}
                    >
                        <img src={newFolderIcon} alt="" />
                        <h3>Créer dossier patient</h3>
                    </div>
                    <div className={style.table}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            hideFooterSelectedRowCount
                            disableSelectionOnClick
                            sx={{
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
                        <PatientModal
                            onClose={() => {
                                setShown(false);
                                setOld(null);
                            }}
                            old={old}
                        />
                    )}
                </main>
            </div>
        </ThemeProvider>
    );
}

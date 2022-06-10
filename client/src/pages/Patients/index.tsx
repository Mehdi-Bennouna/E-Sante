import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import style from "./style.module.css";
import newFolderIcon from "../../assets/icons/Patients/newFolder.svg";
import PatientsActions from "../../components/GridActions/PatientsActions";

export default function Patients() {
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 2,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 3,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 5,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 6,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 7,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 8,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 9,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 10,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 11,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 12,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 13,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 14,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
        {
            id: 15,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            nRdv: "22/10/2000",
            pRdv: "22/10/2000",
        },
    ];

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
            renderCell: (test) => {
                return <PatientsActions />;
            },
        },
    ];

    return (
        <div className={style.Patients}>
            <div className={style.title}>Patients</div>
            <main>
                <div className={style.add_patient}>
                    <img src={newFolderIcon} alt="" />
                    <h3>Créer dossier patient</h3>
                </div>
                <div className={style.table}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        hideFooterSelectedRowCount
                        pageSize={11}
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
            </main>
        </div>
    );
}

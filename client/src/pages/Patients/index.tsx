import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import style from "./style.module.css";
import newFolderIcon from "../../assets/icons/Patients/newFolder.svg";
import PatientsActions from "../../components/GridActions/PatientsActions";
import { useNavigate } from "react-router-dom";

export default function Patients() {
    const navigate = useNavigate();
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: "ATTABI",
            prenom: "Dahlia Melissa",
            age: 22,
            sexe: "Femme",
            telephone: "0629226015",
            nRdv: "22/06/2022",
            pRdv: "22/05/2022",
        },
        {
            id: 2,
            nom: "SLIMANI",
            prenom: "Ismahane",
            age: 22,
            sexe: "Femme",
            telephone: "0682821937",
            nRdv: "22/07/2022",
            pRdv: "22/04/2022",
        },
        {
            id: 3,
            nom: "ROUABAH",
            prenom: "Naila",
            age: 22,
            sexe: "Femme",
            telephone: "0778314973",
            nRdv: "-",
            pRdv: "02/06/2022",
        },
        {
            id: 5,
            nom: "MADADI",
            prenom: "Youcef",
            age: 22,
            sexe: "Homme",
            telephone: "0759995028",
            nRdv: "-",
            pRdv: "12/06/2022",
        },
        {
            id: 6,
            nom: "KHOUMERI",
            prenom: "Lyes",
            age: 22,
            sexe: "Homme",
            telephone: "0758526842",
            nRdv: "21/06/2022",
            pRdv: "21/05/2022",
        },
        {
            id: 7,
            nom: "YALA",
            prenom: "Manel",
            age: 22,
            sexe: "Femme",
            telephone: "0573055800",
            nRdv: "14/06/2022",
            pRdv: "07/04/2022",
        },
        {
            id: 8,
            nom: "GHENAIET",
            prenom: "Walid",
            age: 22,
            sexe: "Homme",
            telephone: "0508753106",
            nRdv: "29/06/2022",
            pRdv: "01/06/2022",
        },
        {
            id: 9,
            nom: "BENKHELIFA",
            prenom: "Abdelghafour",
            age: 21,
            sexe: "Homme",
            telephone: "0528162035",
            nRdv: "-",
            pRdv: "02/06/2022",
        },
        {
            id: 10,
            nom: "BRAHIM-DJELLOUL",
            prenom: "Sami",
            age: 22,
            sexe: "Homme",
            telephone: "0739500698",
            nRdv: "01/07/2022",
            pRdv: "02/04/2022",
        },
        {
            id: 11,
            nom: "NASS",
            prenom: "Manel",
            age: 22,
            sexe: "Femme",
            telephone: "0680374023",
            nRdv: "-",
            pRdv: "22/06/2022",
        },
        {
            id: 12,
            nom: "CHIKHI",
            prenom: "Sofiane",
            age: 22,
            sexe: "Homme",
            telephone: "777928911",
            nRdv: "-",
            pRdv: "22/06/2022",
        },
        {
            id: 13,
            nom: "YENNEK",
            prenom: "Kamel",
            age: 22,
            sexe: "Homme",
            telephone: "0664823147",
            nRdv: "22/10/2022",
            pRdv: "22/10/2022",
        },
        {
            id: 14,
            nom: "ATTABI",
            prenom: "Lilia Dina",
            age: 22,
            sexe: "Femme",
            telephone: "0783395880",
            nRdv: "22/10/2022",
            pRdv: "22/10/2022",
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

    const handleCreatePatient = () => {
        navigate("/Patients/storn");
    };

    return (
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

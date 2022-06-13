import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import style from './style.module.css';
import addSalleIcon from '../../assets/icons/Salle/newFolder.svg';
import SalleActions from "../../components/GridActions/SalleActions";

export default function Salle() {
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: "YALA",
            prenom: "MANEL",
            sexe: "Femme",
            age: 22,
            motif: "-",
            heure_rdv: "8:30",
            heure_arrive: "8:21",
        },
        {
            id: 2,
            nom: "SLIMANI",
            prenom: "Ismahane",
            sexe: "Femme",
            age: 22,
            motif: "-",
            heure_rdv: "9:00",
            heure_arrive: "8:35",
        },
        {
            id: 3,
            nom: "HAIMOUD",
            prenom: "Anes",
            sexe: "Homme",
            age: 22,
            motif: "-",
            heure_rdv: "9:30",
            heure_arrive: "9:11",
        },
        {
            id: 4,
            nom: "YENNEK",
            prenom: "Kamel",
            sexe: "Homme",
            age: 22,
            motif: "-",
            heure_rdv: "10:00",
            heure_arrive: "9:42",
        },
    ];

    const columns: GridColDef[] = [
        { field: "nom", headerName: "Nom", width: 200, type: "date" },
        { field: "prenom", headerName: "Prenom", width: 200 },
        { field: "sexe", headerName: "Sexe", width: 120 },
        { field: "age", headerName: "Age", width: 110 },
        { field: "motif", headerName: "Motif", width: 180 },
        { field: "heure_rdv", headerName: "Heure RDV", width: 150 },
        { field: "heure_arrive", headerName: "Heure d'arrivé", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 200,
            align: "left",
            renderCell: (test) => {
                return <SalleActions />;
            },
        },
    ];

    return (
        <div className={style.Salle}>
            <div className={style.title}>Salle d'attente</div>
            <main>
                <div className={style.add_salle}>
                    <img src={addSalleIcon} alt="" />
                    <h3>Ajouter un patient</h3>
                </div>
                <div className={style.table}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        hideFooterSelectedRowCount
                        disableSelectionOnClick
                        pageSize={11}
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

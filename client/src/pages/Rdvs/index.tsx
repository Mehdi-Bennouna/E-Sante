import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import newRdvIcon from '../../assets/icons/Rendez_vous/newRdv.svg';
import RdvsActions from "../../components/GridActions/RdvsActions";
import style from "./style.module.css";

export default function Rdvs() {
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: "BENKHELIFA",
            prenom: "Abdelghafour",
            age: 21,
            sexe: "Homme",
            telephone: "0562099072",
            motif: "-",
            heure: "8:30",
        },
        {
            id: 2,
            nom: "ROUABAH",
            prenom: "Naila",
            age: 21,
            sexe: "Femme",
            telephone: "0561873072",
            motif: "-",
            heure: "9:10",
        },
        {
            id: 3,
            nom: "CHIKHI",
            prenom: "Sofiane",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            motif: "-",
            heure: "9:40",
        },
    ];

    const columns: GridColDef[] = [
        { field: "nom", headerName: "Nom", width: 200, type: "date" },
        { field: "prenom", headerName: "Prenom", width: 230 },
        { field: "telephone", headerName: "Telephone", width: 200 },
        { field: "age", headerName: "Age", width: 110 },
        { field: "motif", headerName: "Motif", width: 150 },
        { field: "heure", headerName: "Heure", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 200,
            align: "left",
            renderCell: (test) => {
                return <RdvsActions />;
            },
        },
    ];
    return (
        <div className={style.Rdvs}>
            <div className={style.title}>Rendez-vous</div>
            <main>
                <div className={style.add_rdv}>
                    <img src={newRdvIcon} alt="" />
                    <h3>Créer Rendez-vous</h3>
                </div>
                <div className={style.table}>
                    <h2 className={style.nbRdv}>
                        2 Rendez-vous pour le{" "}
                        <span className={style.blueDate}>02/06/2022</span>
                    </h2>
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

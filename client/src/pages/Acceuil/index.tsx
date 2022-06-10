import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import ExaminationWidget from '../../components/Acceuil/ExaminationWidget';
import RdvWidget from '../../components/Acceuil/RdvWidget';
import SalleWidget from '../../components/Acceuil/SalleWidget';
import style from './style.module.css';

export default function Acceuil() {
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: 'BENNOUNA',
            age: 22,
            sexe: 'Homme',
            arrivee: '8:30',
            rdv: 'yes',
            cellClassName: style.test,
        },
        {
            id: 2,
            nom: 'BENNOUNA',
            age: 22,
            sexe: 'Homme',
            arrivee: '8:30',
            rdv: 'yes',
        },
        {
            id: 3,
            nom: 'BENNOUNA',
            age: 22,
            sexe: 'Homme',
            arrivee: '8:30',
            rdv: 'yes',
        },
        {
            id: 4,
            nom: 'BENNOUNA',
            age: 22,
            sexe: 'Homme',
            arrivee: '8:30',
            rdv: 'yes',
        },
    ];

    const columns: GridColDef[] = [
        { field: 'nom', headerName: 'Nom', width: 150 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'sexe', headerName: 'Sexe', width: 110 },
        { field: 'arrivee', headerName: 'Arrivée', width: 150 },
        { field: 'rdv', headerName: 'RDV', width: 150 },
    ];

    return (
        <div className={style.Acceuil}>
            <div className={style.title}>Acceuil</div>
            <main>
                <div className={style.widgets}>
                    <RdvWidget />
                    <SalleWidget />
                    <ExaminationWidget />
                </div>
                <div className={style.table}>
                    <h1>Salle d'attente</h1>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        hideFooter
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

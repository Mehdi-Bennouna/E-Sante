import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import style from './style.module.css';
import newTestIcon from '../../assets/icons/Tests/newTest.svg';
import TestsActions from "../../components/GridActions/TestsActions";

export default function Tests() {
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            motif: "Too smart",
            nRdv: "22/10/2000",
        },
        {
            id: 2,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            motif: "Too smart",
            nRdv: "22/10/2000",
        },
        {
            id: 3,
            nom: "BENNOUNA",
            prenom: "Mehdi",
            age: 22,
            sexe: "Homme",
            telephone: "0562099072",
            motif: "Too smart",
            nRdv: "22/10/2000",
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
                return <TestsActions />;
            },
        },
    ];

    return (
        <div className={style.Tests}>
            <div className={style.title}>Tests</div>
            <main>
                <div className={style.add_test}>
                    <img src={newTestIcon} alt="" />
                    <h3>Créer un test</h3>
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

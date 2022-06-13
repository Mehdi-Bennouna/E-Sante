import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import style from './style.module.css';
import newTestIcon from '../../assets/icons/Tests/newTest.svg';
import TestsActions from "../../components/GridActions/TestsActions";

export default function Tests() {
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: "Échelle d'évaluation de l'autisme(cars)",
            categorie: "Autisme",
            notation: "Choix multiples",
        },
        {
            id: 2,
            nom: "Cognition et réaction",
            categorie: "Alzhaimer",
            notation: "Reponse libre",
        },
        {
            id: 3,
            nom: "TEECH Motricité 1",
            categorie: "Autisme",
            notation: "Exercice manuel",
        },
    ];

    const columns: GridColDef[] = [
        { field: "nom", headerName: "Nom", width: 300, type: "date" },
        { field: "categorie", headerName: "Categorie", width: 230 },
        { field: "notation", headerName: "Type", width: 200 },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 250,
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

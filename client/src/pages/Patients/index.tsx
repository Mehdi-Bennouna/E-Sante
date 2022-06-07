import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import style from './style.module.css';
import newFolderIcon from '../../assets/icons/Patients/newFolder.svg';

export default function Patients() {
    const rows: GridRowsProp = [
        {
            id: 1,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 2,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 3,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 5,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 6,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 7,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 8,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 9,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 10,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 11,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 12,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 13,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 14,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
        {
            id: 15,
            nom: 'BENNOUNA',
            prenom: 'Mehdi',
            age: 22,
            sexe: 'Homme',
            telephone: '0562099072',
            motif: 'Too smart',
            nRdv: '22/10/2000',
        },
    ];

    const columns: GridColDef[] = [
        { field: 'nom', headerName: 'Nom', width: 200 },
        { field: 'prenom', headerName: 'Prenom', width: 230 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'sexe', headerName: 'Sexe', width: 110 },
        { field: 'telephone', headerName: 'Téléphone', width: 150 },
        { field: 'motif', headerName: 'Motif', width: 150 },
        { field: 'nRdv', headerName: 'Prochin RDV', width: 150 },
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
                        sx={{
                            border: 'none',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '19px',
                            color: '#455560',
                        }}
                    />
                </div>
            </main>
        </div>
    );
}

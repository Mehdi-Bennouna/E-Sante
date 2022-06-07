import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import newRdvIcon from '../../assets/icons/Rendez_vous/newRdv.svg';
import style from './style.module.css';

export default function Rdvs() {
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
    ];

    const columns: GridColDef[] = [
        { field: 'nom', headerName: 'Nom', width: 200, type: 'date' },
        { field: 'prenom', headerName: 'Prenom', width: 230 },
        { field: 'telephone', headerName: 'Telephone', width: 200 },
        { field: 'age', headerName: 'Age', width: 110 },
        { field: 'motif', headerName: 'Motif', width: 150 },
        { field: 'heure', headerName: 'Heure', width: 150 },
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
                        6 Rendez-vous pour le{' '}
                        <span className={style.blueDate}>22/10/2000</span>
                    </h2>
                    <DataGrid
                        columns={columns}
                        rows={rows}
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

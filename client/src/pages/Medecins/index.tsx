import style from "./style.module.css";
import newMedecinIcon from "../../assets/icons/Medecin/newMedecin.svg";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MedecinActions from "../../components/GridActions/MedecinActions";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Medecins() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = (
                await axios.get("http://localhost:3001/api/users")
            ).data
                .filter((user: any) => {
                    if (user.type === "MEDECIN") {
                        return true;
                    } else {
                        return false;
                    }
                })
                .map((user: any, index: any) => {
                    return {
                        id: index + 1,
                        nom: user.nom,
                        prenom: user.prenom,
                        userId: user.id,
                    };
                });

            setData(data);
        };

        fetchData();
    }, []);

    const columns: GridColDef[] = [
        { field: "nom", headerName: "Nom", width: 200 },
        { field: "prenom", headerName: "Prenom", width: 230 },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 200,
            align: "left",
            renderCell: (params) => {
                return <MedecinActions />;
            },
        },
    ];

    const handleCreateMedecin = () => {};
    return (
        <div className={style.Medecin}>
            <div className={style.title}>Medecins</div>
            <main>
                <div
                    className={style.add_medecin}
                    onClick={handleCreateMedecin}
                >
                    <img src={newMedecinIcon} alt="" />
                    <h3>Créer compte medecin</h3>
                </div>
                <div className={style.table}>
                    {data && (
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
                    )}
                </div>
            </main>
        </div>
    );
}

import style from "./style.module.css";
import newAssistantIcon from "../../assets/icons/Assistant/newAssistant.svg";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AssistantActions from "../../components/GridActions/AssistantActions";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Assistants() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = (
                await axios.get("http://localhost:3001/api/users")
            ).data
                .filter((user: any) => {
                    if (user.type === "ASSISTANT") {
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

            console.log(data);

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
                return <AssistantActions />;
            },
        },
    ];

    const handleCreateAssistant = () => {};
    return (
        <div className={style.Assistant}>
            <div className={style.title}>Assistants</div>
            <main>
                <div
                    className={style.add_assistant}
                    onClick={handleCreateAssistant}
                >
                    <img src={newAssistantIcon} alt="" />
                    <h3>Créer compte Assistant</h3>
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

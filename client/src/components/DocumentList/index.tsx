import { Button, SpeedDial, SpeedDialAction } from "@mui/material";
import style from "./style.module.css";

export default function DocumentsList({ docs, setShowOrd, setShowFact }: any) {
    //doc = {type , id}
    const sx = { margin: "0 10px 10px 0" };
    const actions = [
        { icon: "1", name: "Fiche d'observation" },
        { icon: "2", name: "Ordonnance", fun: () => setShowOrd(true) },
        { icon: "3", name: "Facture", fun: () => setShowFact(true) },
        { icon: "4", name: "Mesure" },
    ];
    return (
        <div className={style.DocumentList}>
            <div className={style.list}>
                {docs.map((element: any, index: any) => {
                    return (
                        <Button key={index} variant="contained" sx={sx}>
                            {element.type}
                        </Button>
                    );
                })}
            </div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "absolute", bottom: 610, left: 450 }}
                icon={"+"}
                direction={"left"}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.fun}
                    />
                ))}
            </SpeedDial>
        </div>
    );
}

import style from "./style.module.css";

import EditIcon from "../../../assets/icons/GridActions/EditIcon.svg";
import OpenIcon from "../../../assets/icons/GridActions/OpenIcon.svg";
import DeleteIcon from "../../../assets/icons/GridActions/DeleteIcon.svg";
import axios from "axios";

export default function PatientsActions(props: any) {
    const myStyle = `.invis {
		visibility : hidden;
	}`;

    const handleEdit = async () => {
        const user = (
            await axios.put("http://localhost:3001/api/patients", {
                old: {
                    nom: props.row.nom,
                    prenom: props.row.prenom,
                },
                new: {
                    nom: props.row.nom,
                    prenom: props.row.prenom,
                },
            })
        ).data;


        props.setOld(user);
        props.setShown(true);
    };

    const handleOpen = () => {};

    const handleDelete = () => {
        axios.delete("http://localhost:3001/api/patients", {
            data: { nom: props.row.nom, prenom: props.row.prenom },
        });
        props.setData(
            props.data.filter((element: any) => {
                if (element.id === props.row.id) {
                    return false;
                } else {
                    return true;
                }
            }),
        );
    };

    return (
        <>
            <style>{myStyle}</style>
            <div className={`${style.PatientsActions} invis`}>
                <img src={EditIcon} alt="" onClick={handleEdit} />
                <img src={OpenIcon} alt="" onClick={handleOpen} />
                <img src={DeleteIcon} alt="" onClick={handleDelete} />
            </div>
        </>
    );
}

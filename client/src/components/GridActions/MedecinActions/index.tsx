import style from "./style.module.css";
import EditIcon from "../../../assets/icons/GridActions/EditIcon.svg";
import OpenIcon from "../../../assets/icons/GridActions/OpenIcon.svg";
import DeleteIcon from "../../../assets/icons/GridActions/DeleteIcon.svg";

export default function MedecinActions() {
    const myStyle = `.invis {
		visibility : hidden;
	}`;

    const handleEdit = () => {};
    const handleOpen = () => {};
    const handleDelete = () => {};

    return (
        <>
            <style>{myStyle}</style>
            <div className={`${style.MedecinActions} invis`}>
                <img src={EditIcon} alt="" onClick={handleEdit} />
                <img src={OpenIcon} alt="" onClick={handleOpen} />
                <img src={DeleteIcon} alt="" onClick={handleDelete} />
            </div>
        </>
    );
}

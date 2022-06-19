import style from "./style.module.css";
import EditIcon from "../../../assets/icons/GridActions/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/GridActions/DeleteIcon.svg";

export default function MedecinActions() {
    const myStyle = `.invis {
		visibility : hidden;
	}`;

    const handleEdit = () => {};
    const handleDelete = () => {};

    return (
        <>
            <style>{myStyle}</style>
            <div className={`${style.MedecinActions} invis`}>
                <img src={EditIcon} alt="" onClick={handleEdit} />
                <img src={DeleteIcon} alt="" onClick={handleDelete} />
            </div>
        </>
    );
}

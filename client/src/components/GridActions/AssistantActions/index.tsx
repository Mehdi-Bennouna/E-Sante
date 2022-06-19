import style from "./style.module.css";
import EditIcon from "../../../assets/icons/GridActions/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/GridActions/DeleteIcon.svg";

export default function AssistantActions() {
    const myStyle = `.invis {
		visibility : hidden;
	}`;

    const handleEdit = () => {};
    const handleDelete = () => {};

    return (
        <>
            <style>{myStyle}</style>
            <div className={`${style.AssistantActions} invis`}>
                <img src={EditIcon} alt="" onClick={handleEdit} />
                <img src={DeleteIcon} alt="" onClick={handleDelete} />
            </div>
        </>
    );
}

import style from "./style.module.css";

import EditIcon from "../../../assets/icons/GridActions/EditIcon.svg";
import OpenIcon from "../../../assets/icons/GridActions/OpenIcon.svg";
import DeleteIcon from "../../../assets/icons/GridActions/DeleteIcon.svg";

export default function RdvsActions() {
    const myStyle = `.invis {
		visibility : hidden;
	}`;
    return (
        <>
            <style>{myStyle}</style>
            <div className={`${style.RdvsActions} invis`}>
                <img src={EditIcon} alt="" />
                <img src={OpenIcon} alt="" />
                <img src={DeleteIcon} alt="" />
            </div>
        </>
    );
}

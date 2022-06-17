import style from "./style.module.css";

import EditIcon from "../../../assets/icons/GridActions/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/GridActions/DeleteIcon.svg";
import axios from "axios";

export default function RdvsActions({
    row,
    data,
    setData,
    setOld,
    setShown,
}: any) {
    const myStyle = `.invis {
		visibility : hidden;
	}`;

    const handleDelete = () => {
        axios.delete("http://localhost:3001/api/rdvs/", {
            data: { id: row.rdvId },
        });
        setData(
            data.filter((element: any) => {
                if (element.rdvId === row.rdvId) {
                    return false;
                } else {
                    return true;
                }
            }),
        );
    };

    const handleEdit = async () => {
        const rdv = await axios.put("http://localhost:3001/api/rdvs", {
            old: {
                id: row.rdvId,
            },
            new: {
                id: row.rdvId,
            },
        });

        setOld(rdv);
        setShown(true);
    };
    return (
        <>
            <style>{myStyle}</style>
            <div className={`${style.RdvsActions} invis`}>
                <img src={EditIcon} alt="" onClick={handleEdit} />
                <img src={DeleteIcon} alt="" onClick={handleDelete} />
            </div>
        </>
    );
}

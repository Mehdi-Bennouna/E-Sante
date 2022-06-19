import style from "./style.module.css";
import EditIcon from "../../../assets/icons/GridActions/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/GridActions/DeleteIcon.svg";
import axios from "axios";

export default function MedecinActions({
    setIsShown,
    setOld,
    row,
    data,
    setData,
}: any) {
    const myStyle = `.invis {
		visibility : hidden;
	}`;

    const handleEdit = async () => {
        const user = (
            await axios.get(`http://localhost:3001/api/users/${row.userId}`)
        ).data;

        setOld(user);
        setIsShown(true);
    };
    const handleDelete = async () => {
        const user = (
            await axios.delete(`http://localhost:3001/api/users/${row.userId}`)
        ).data;

        setData(
            data.filter((element: any) => {
                if (element.userId === row.userId) {
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
            <div className={`${style.MedecinActions} invis`}>
                <img src={EditIcon} alt="" onClick={handleEdit} />
                <img src={DeleteIcon} alt="" onClick={handleDelete} />
            </div>
        </>
    );
}

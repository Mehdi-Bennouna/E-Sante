import style from "./style.module.css";
import userIcon from "../../../assets/icons/TopBar/User.svg";
import searchIcon from "../../../assets/icons/TopBar/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../features/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { load } from "../../../features/patientSlice";

export default function TopBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [active, setActive] = useState(false);
    const user = useSelector(selectUser);

    const handleLogout = async (e: any) => {
        e.preventDefault();
        dispatch(logout());
        navigate("/");
    };

    useEffect(() => {
        setInterval(async () => {
            async function fetchPatients() {
                const patients = (
                    await axios.get("http://localhost:3001/api/patients/")
                ).data.map((patient: any) => {
                    return {
                        id: patient.id,
                        nom: patient.nom,
                        prenom: patient.prenom,
                    };
                });

                return patients;
            }

            const patients = await fetchPatients();

            dispatch(
                load({
                    patients: patients,
                }),
            );
        }, 500);
    }, []);

    const name = `${user.prenom} ${user.nom}`;

    return (
        <div className={style.TopBar}>
            <div className={style.search}>
                <input type="text" placeholder="Rechercher..." />
                <img src={searchIcon} alt="" />
            </div>

            <div className={style.logout}>
                <div
                    className={style.user}
                    onClick={() => {
                        setActive(!active);
                    }}
                >
                    <img src={userIcon} alt="" />
                    <h1>{name}</h1>
                </div>
                <div
                    className={`${style.logout_button} ${
                        active ? "" : style.invis
                    }`}
                    onClick={handleLogout}
                >
                    Verrouiller
                </div>
            </div>
        </div>
    );
}

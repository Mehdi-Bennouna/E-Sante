import style from "./style.module.css";
import userIcon from "../../../assets/icons/TopBar/User.svg";
import searchIcon from "../../../assets/icons/TopBar/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../features/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { load, selectPatients } from "../../../features/patientSlice";
import { Autocomplete, TextField } from "@mui/material";

export default function TopBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [active, setActive] = useState(false);
    const user = useSelector(selectUser);
    const [options, setOptions] = useState(null);
    const [search, setSearch] = useState(null);

    // const options = patients.map((patient: any) => {
    //     return {
    //         label: `${patient.nom} ${patient.prenom}`,
    //         id: patient.id,
    //     };
    // });

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

            const option = patients.map((patient: any) => {
                return {
                    label: `${patient.nom} ${patient.prenom}`,
                    id: patient.id,
                };
            });

            setOptions(option);
        }, 50);
    }, []);

    const name = `${user.prenom} ${user.nom}`;

    return (
        <div className={style.TopBar}>
            {/* <div className={style.search}>
                {options && (
                    <Autocomplete
                        options={options}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                // InputProps={{
                                //     disableUnderline: true, // <== added this
                                // }}
                                fullWidth
                                sx={{ width: "260px" }}
                                hiddenLabel
                            />
                        )}
                        openOnFocus
                    />
                )}
                <img src={searchIcon} alt="" />
            </div> */}

            <div className={style.newSearch}>
                {options && (
                    <Autocomplete
                        options={options}
                        renderInput={(params) => (
                            <TextField
                                placeholder="Rechercher..."
                                {...params}
                                variant="outlined"
                                // InputProps={{
                                //     disableUnderline: true, // <== added this
                                // }}
                                fullWidth
                                sx={{ width: "300px" }}
                                hiddenLabel
                            />
                        )}
                        value={search}
                        onChange={(e, value: any) => {
                            navigate(`/Patients/${value.id}`);
                            setSearch(null);
                        }}
                    />
                )}
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

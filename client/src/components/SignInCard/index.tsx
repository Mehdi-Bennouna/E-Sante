import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";
import style from "./style.module.css";

export default function SignInCard() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [wrongPass, setWrongPass] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3001/api/users/login",
                {
                    username: username,
                    password: password,
                },
            );

            dispatch(
                login({
                    userId: response.data.userId,
                    username: response.data.username,
                    nom: response.data.nom,
                    prenom: response.data.prenom,
                    type: response.data.type,
                    accessToken: response.data.accessToken,
                    loggedIn: true,
                }),
            );

            response.data.type === "ADMIN"
                ? navigate({ pathname: "/Medecins" })
                : navigate({ pathname: "/Acceuil" });

            
        } catch (e) {
            setWrongPass(true);
            console.error(e);
        }

        //if axios request 200 ==> dispatch and navigate to dashboard

        //if axios request 401 ==> wrong password
    };

    return (
        <form className={style.SignInCard} onSubmit={(e) => handleSubmit(e)}>
            <div className={style.headers}>
                <h1>Connexion</h1>
                <h2>
                    Utiliser votre compte <span>E!</span>Santé
                </h2>
            </div>

            <div className={style.inputs}>
                <input
                    type="text"
                    placeholder="Nom d' utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <h3 className={wrongPass ? "" : style.invis}>
                    Utilisateur ou mot de passe invalide
                </h3>
            </div>

            <button type="submit">Se Connecter</button>
        </form>
    );
}

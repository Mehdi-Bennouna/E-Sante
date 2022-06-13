import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";
import style from "./style.module.css";

export default function SignInCard() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(
            login({
                username: username,
                password: password,
                loggedIn: true,
            }),
        );

        navigate({ pathname: "/Acceuil" });
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
                <h3>Utilisateur ou mot de passe invalide</h3>
            </div>

            <button type="submit">Se Connecter</button>
        </form>
    );
}

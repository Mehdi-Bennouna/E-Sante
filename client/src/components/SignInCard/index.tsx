import style from './style.module.css';

export default function SignInCard() {
    return (
        <form action="" className={style.SignInCard}>
            <div className={style.headers}>
                <h1>Connexion</h1>
                <h2>
                    Utiliser votre compte <span>E!</span>Santé
                </h2>
            </div>

            <div className={style.inputs}>
                <input type="text" placeholder="Nom d' utilisateur" />
                <input type="password" placeholder="Mot de passe" />
                <h3>Utilisateur ou mot de passe invalide</h3>
            </div>

            <button type="submit">Se Connecter</button>
        </form>
    );
}

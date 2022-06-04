import style from './style.module.css';

export default function LoginCard() {
    return (
        <div className={style.LoginCard}>
            <div className={style.headings}>
                <h1>Connexion</h1>
                <h2>Utiliser votre compte E!Sante</h2>
            </div>

            <div className={style.inputs}>
                <input type="text" placeholder="Nom d'utilisateur" />
                <input type="password" placeholder="Password" />
            </div>

            <button>Se Connecter</button>
        </div>
    );
}

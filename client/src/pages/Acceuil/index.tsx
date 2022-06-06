import RdvWidget from '../../components/Acceuil/RdvWidget';
import style from './style.module.css';

export default function Acceuil() {
    return (
        <div className={style.Acceuil}>
            <div className={style.title}>Acceuil</div>
            <main>
                <div className={style.widgets}>
                    <RdvWidget />
                </div>
                <div className={style.table}></div>
            </main>
        </div>
    );
}

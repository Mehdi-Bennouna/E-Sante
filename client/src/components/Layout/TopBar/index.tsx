import style from './style.module.css';
import userIcon from '../../../assets/icons/TopBar/User.svg';
import searchIcon from '../../../assets/icons/TopBar/Search.svg';

export default function TopBar() {
    return (
        <div className={style.TopBar}>
            <div className={style.search}>
                <input type="text" placeholder="Rechercher..." />
                <img src={searchIcon} alt="" />
            </div>

            <div className={style.user}>
                <img src={userIcon} alt="" />
                <h1>BENNOUNA Mehdi</h1>
            </div>
        </div>
    );
}

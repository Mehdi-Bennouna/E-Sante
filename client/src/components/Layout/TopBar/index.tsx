import style from './style.module.css';

import user from '../../../assets/icons/TopBar/User.svg';
import search from '../../../assets/icons/TopBar/search.svg';

export default function TopBar() {
    return (
        <div className={style.TopBar}>
            <div className={style.search}>
                <input type="text" />
                <img src={search} alt="" />
            </div>
            <div className={style.user}>
                <img src={user} alt="" />
                <h2>Bennouna Mehdi</h2>
            </div>
        </div>
    );
}

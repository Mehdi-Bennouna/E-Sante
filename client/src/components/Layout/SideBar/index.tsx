import style from './style.module.css';
import { assistantBar } from './bars';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <div className={style.SideBar}>
            <div className={style.logo}>
                <span>E!</span>Sante
            </div>

            <ul className={style.bar__items}>
                {assistantBar.map((entry, key) => {
                    return (
                        <li
                            className={style.bar_item}
                            key={key}
                            id={
                                window.location.pathname === entry.link
                                    ? style.active
                                    : ''
                            }
                            onClick={() => {
                                navigate(`${entry.link}`);
                            }}
                        >
                            <img src={entry.icon} alt="" />
                            {entry.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

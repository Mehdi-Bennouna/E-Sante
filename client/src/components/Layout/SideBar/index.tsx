import style from './style.module.css';
import { assistantBar } from './bars';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const navigate = useNavigate();

    return (
        <nav className={style.SideBar}>
            <h1 className={style.logo}>
                <span>E!</span>Santé
            </h1>
            <ul className={style.bar_items}>
                {assistantBar.map((entry, key) => {
                    return (
                        <li
                            className={style.bar_item}
                            id={
                                window.location.pathname === entry.link
                                    ? style.active
                                    : ''
                            }
                            onClick={() => {
                                navigate(entry.link);
                            }}
                        >
                            <img src={entry.icon} alt="" />
                            <h2>{entry.title}</h2>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

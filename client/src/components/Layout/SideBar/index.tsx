import style from './style.module.css';
import { adminBar, assistantBar, medecinBar } from "./bars";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

export default function SideBar() {
    const navigate = useNavigate();

    const user = useSelector(selectUser);
    let barItems;
    switch (user.type) {
        case "MEDECIN":
            barItems = medecinBar;
            break;
        case "ASSISTANT":
            barItems = assistantBar;
            break;

        case "ADMIN":
            barItems = adminBar;
            break;

        default:
            break;
    }

    return (
        <nav className={style.SideBar}>
            <h1 className={style.logo}>
                <span>E!</span>Santé
            </h1>
            <ul className={style.bar_items}>
                {barItems?.map((entry, key) => {
                    return (
                        <li
                            key={key}
                            className={style.bar_item}
                            id={
                                window.location.pathname.includes(entry.link)
                                    ? style.active
                                    : ""
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

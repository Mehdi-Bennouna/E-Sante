import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import TopBar from './TopBar';
import style from './style.module.css';

export default function Layout() {
    return (
        <>
            <SideBar />
            <TopBar />
            <main className={style.main_content}>
                <Outlet />
            </main>
        </>
    );
}

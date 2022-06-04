import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function Layout() {
    return (
        <>
            <TopBar />
            <SideBar />
            <Outlet />
        </>
    );
}

import { Outlet } from "react-router-dom";
import MainNavBar from "../navbar/MainNavBar";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <MainNavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
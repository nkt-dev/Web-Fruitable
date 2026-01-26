import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";

export default function Layout({ cart = [], currentUser, isAuthenticated }) {
    const location = useLocation();

    const [hideLayout, setHideLayout] = useState(false);
    useEffect(() => {
        const hiddenRoutes = ["/signin", "/register"];
        const isDashboard = location.pathname
            .toLowerCase()
            .startsWith("/dashboard");
        setHideLayout(hiddenRoutes.includes(location.pathname.toLowerCase()) ||
            isDashboard);
    }, [location.pathname]);

    return (
        <>
            <Header
                cart={cart}
                currentUser={currentUser}
                isAuthenticated={isAuthenticated}
            />
            <Outlet />
            <Footer />
        </>
    );
}
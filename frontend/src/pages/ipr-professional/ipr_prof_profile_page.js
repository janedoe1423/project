import React, { useState, useEffect } from "react";
import IPRSidebar from "./ipr_prof_sidebar";
import IPRDashboard from "./ipr_prof_dashboard";
import IPRProfile from "./ipr_prof_profile";
import IPRReports from "./ipr_prof_reports";
const IPRProfilePage = () => {
    const [currentPage, setCurrentPage] = useState(window.location.hash || "#dashboard");

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(window.location.hash || "#dashboard");
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const renderPage = (hash) => {
        switch (hash) {
            case "#dashboard":
                return <IPRDashboard />;
            case "#profile":
                return <IPRProfile />;
            case "#reports":
                return <IPRReports />;
            default:
                return <IPRDashboard />;
        }
    };

    return (
        <div className="d-flex">
            <IPRSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(currentPage)}
            </div>
        </div>
    );
};

export default IPRProfilePage;

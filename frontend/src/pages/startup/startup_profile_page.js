import React, { useState, useEffect } from "react";
import StartupSidebar from "./startupsidebar.js";
import StartupDashboard from "./startup_dashboard";
import StartupProfile from "./startup_profile";
import StartupResourceAllocation from "./startup_resource_allocate";
import StartupIPRRights from "./startup_ipr";
import StartupSchemes from "./startup_schemes";
import StartupReports from "./startup_reports";
import StartupCollaboration from "./startup_collaboration.js";
import StartupNotify from "./startup_notify.js";
import StartupFunding from "./startup_funding.js";

const Startup_profile_page = () => {
    const [currentPage, setCurrentPage] = useState(window.location.hash || "#dashboard");

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(window.location.hash || "#dashboard");
        };

        window.addEventListener("hashchange", handleHashChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const renderPage = (hash) => {
        switch (hash) {
            case "#dashboard":
                return <StartupDashboard />;
            case "#profile":
                return <StartupProfile />;
            case "#resource-allocation":
                return <StartupResourceAllocation />;
            case "#ipr-rights":
                return <StartupIPRRights />;
            case "#schemes":
                return <StartupSchemes />;
            case "#collaboration-tools":
                return <StartupCollaboration />;
            case "#notify":
                return <StartupNotify />;
            case "#reports":
                return <StartupReports />;
            case "#funding":
                return <StartupFunding />;
            default:
                return <StartupDashboard />;
        }
    };

    return (
        <div className="d-flex">
            <StartupSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(currentPage)}
            </div>
        </div>
    );
};

export default Startup_profile_page;

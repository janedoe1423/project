import React, { useState, useEffect } from "react";
import ResearcherSidebar from "./Researchersidebar.js";
import ResearcherDashboard from "./researcher_dashboard.js";
import ResearcherProfile from "./researcher_profile.js";
import ResearcherSidebar from "./researcher_sidebar.js";
import ResearcherWorks from "./researcher_works.js";

const Researcher_profile_page = () => {
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
                return <ResearcherDashboard />;
            case "#profile":
                return <ResearcherProfile />;
            case "#works":
                return <ResearcherWorks />;
            default:
                return <ResearcherDashboard />;
        }
    };

    return (
        <div className="d-flex">
            <ResearcherSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(currentPage)}
            </div>
        </div>
    );
};

export default Researcher_profile_page;

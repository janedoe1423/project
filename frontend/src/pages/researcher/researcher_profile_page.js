import React, { useState, useEffect } from "react";
import ResearcherDashboard from "./researcher_dashboard";
import ResearcherProfile from "./researcher_profile";
import ResearcherGrantsFunding from "./researcher_grantsfunding";
import ResearcherIPR from "./researcher_ipr";
import ResearcherInsights from "./researcher_insights";
import ResearcherPapers from "./researcher_paper";
import ResearcherSidebar from "./researcher_sidebar";
import ResearchersCollaborationRequests from "./researcher_collaboration";

const Researcher = () => {
    const [currentHash, setCurrentHash] = useState(window.location.hash || "#dashboard");

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = (hash) => {
        switch (hash) {
            case "#dashboard":
                return <ResearcherDashboard />;
            case "#profile":
                return <ResearcherProfile />;
            case "#research-papers":
                return <ResearcherPapers />;
            case "#ipr":
                return <ResearcherIPR />;
            case "#collaboration-requests":
                return <ResearchersCollaborationRequests />;
            case "#grants-funding":
                return <ResearcherGrantsFunding />;
            case "#insights":
                return <ResearcherInsights />;
            default:
                return <ResearcherDashboard />;
        }
    };

    return (
        <div className="d-flex">
            <ResearcherSidebar currentHash={currentHash} />
            <div className="flex-grow-1 p-4">
                {renderPage(currentHash)}
            </div>
        </div>
    );
};

export default Researcher;
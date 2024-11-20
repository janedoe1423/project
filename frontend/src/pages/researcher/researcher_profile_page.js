import React from "react";
import ResearcherDashboard from "./researcher_dashboard";
import ResearcherProfile from "./researcher_profile";
import ResearcherGrantsFunding from "./researcher_grantsfunding";
import ResearcherIPR from "./researcher_ipr";
import ResearcherInsights from "./researcher_insights";
import ResearcherPapers from "./researcher_paper";
import ResearcherSidebar from "./researcher_sidebar";
import ResearchersCollaborationRequests from "./researcher_collaboration";

const Researcher = () => {
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
                return <ResearchersCollaborationRequests/>;
            case "#grants-funding":
                return <ResearcherGrantsFunding />;
            case "#insights":
                return <ResearcherInsights/>;
            default:
                return <ResearcherDashboard />;
        }
    };

    return (
        <div className="d-flex">
            <ResearcherSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(window.location.hash)}
            </div>
        </div>
    );
};

export default Researcher;

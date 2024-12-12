import React, { useState, useEffect } from "react";
import GovernmentSidebar from "./gb_sidebar";   
import Dashboard from "./gb_dashboard";
import PolicyImplementation from "./gb_policy";
import FundingGrants from "./gb_funding";
import DataTransparency from "./gb_data";
import ResourceSupport from "./gb_rs";
import GbCollab from "./gb_collab";
import AnalyticsFeedback from "./gb_analysis";
import IPRFacilitation from "./gb_ipr";
import MarketTrends from "./gb_market";

const AdminProfilePage = () => {
    const [currentPage, setCurrentPage] = useState(window.location.hash || "#dashboard");

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(window.location.hash || "#dashboard");
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const renderPage = (hash) => {
        switch (hash) {
            case "#dashboard":
                return <Dashboard />;
            case "#policy":
                return <PolicyImplementation />;
            case "#funding":
                return <FundingGrants />;
            case "#data":
                return <DataTransparency />;
            case "#resources":
                return <ResourceSupport />;
            case "#collaboration":
                return <GbCollab />;
            case "#analytics":
                return <AnalyticsFeedback />;
            case "#ipr":
                return <IPRFacilitation />;
            case "#market":
                return <MarketTrends />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="d-flex">
            <GovernmentSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(currentPage)}
            </div>
        </div>
    );
};

export default AdminProfilePage;
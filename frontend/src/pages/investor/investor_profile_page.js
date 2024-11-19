import React, { useState, useEffect } from "react";
import InvestorSidebar from "./InvestorSidebar.js";
import InvestorDashboard from "./InvestorDashboard";
import InvestorProfile from "./InvestorProfile";
import InvestorPortfolio from "./InvestorPortfolio";
import InvestorInvestments from "./InvestorInvestments";
import InvestorNetwork from "./InvestorNetwork";
import InvestorReports from "./InvestorReports";
import InvestorSchemes from "./InvestorSchemes";

const InvestorProfilePage = () => {
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
                return <InvestorDashboard />;
            case "#profile":
                return <InvestorProfile />;
            case "#portfolio":
                return <InvestorPortfolio />;
            case "#investments":
                return <InvestorInvestments />;
            case "#network":
                return <InvestorNetwork />;
            case "#reports":
                return <InvestorReports />;
            case "#schemes":
                return <InvestorSchemes />;
            default:
                return <InvestorDashboard />;
        }
    };

    return (
        <div className="d-flex">
            <InvestorSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(currentPage)}
            </div>
        </div>
    );
};

export default InvestorProfilePage;

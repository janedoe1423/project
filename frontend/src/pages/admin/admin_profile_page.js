import React, { useState, useEffect } from "react";
import AdminSidebar from "./admin_sidebar.js";

// Import all admin components
const AdminDashboard = React.lazy(() => import("./admin_dashboard"));
const AdminProfile = React.lazy(() => import("./admin_profile"));
const AdminIPRManagement = React.lazy(() => import("./admin_ipr_management"));
const AdminSchemeManagement = React.lazy(() => import("./admin_scheme_management"));
const AdminStartupManagement = React.lazy(() => import("./admin_startup_management"));
const AdminNotifications = React.lazy(() => import("./admin_notifications"));
const AdminFundingManagement = React.lazy(() => import("./admin_funding_management"));
const AdminUserManagement = React.lazy(() => import("./admin_user_management"));
const AdminInvestorsManagement = React.lazy(() => import("./admin_investors_management"));
const AdminMentorsManagement = React.lazy(() => import("./admin_mentors_management"));
const AdminResearchersManagement = React.lazy(() => import("./admin_researchers_management"));
const AdminCollaborationManagement = React.lazy(() => import("./admin_collaboration_management"));
const AdminPolicyManagement = React.lazy(() => import("./admin_policy_management"));

const Admin_profile_page = () => {
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
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                {(() => {
                    switch (hash) {
                        case "#dashboard":
                            return <AdminDashboard />;
                        case "#profile":
                            return <AdminProfile />;
                        case "#ipr-management":
                            return <AdminIPRManagement />;
                        case "#scheme-management":
                            return <AdminSchemeManagement />;
                        case "#startup-management":
                            return <AdminStartupManagement />;
                        case "#notifications":
                            return <AdminNotifications />;
                        case "#funding-management":
                            return <AdminFundingManagement />;
                        case "#user-management":
                            return <AdminUserManagement />;
                        case "#investors-management":
                            return <AdminInvestorsManagement />;
                        case "#mentors-management":
                            return <AdminMentorsManagement />;
                        case "#researchers-management":
                            return <AdminResearchersManagement />;
                        case "#collaboration-management":
                            return <AdminCollaborationManagement />;
                        case "#policy-management":
                            return <AdminPolicyManagement />;
                        default:
                            return <AdminDashboard />;
                    }
                })()}
            </React.Suspense>
        );
    };

    return (
        <div className="d-flex">
            <AdminSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(currentPage)}
            </div>
        </div>
    );
};

export default Admin_profile_page;
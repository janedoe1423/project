import React, { useState, useEffect } from "react";
import MentorSidebar from "./mentor_sidebar.js";

// Import all mentor components
const MentorDashboard = React.lazy(() => import("./mentor_dashboard"));
const MentorProfile = React.lazy(() => import("./mentor_profile"));
const MentorshipEngagements = React.lazy(() => import("./mentorship_engagements"));
const MentorCollaboration = React.lazy(() => import("./mentor_collaboration"));
const EducationalResources = React.lazy(() => import("./mentor_educational_resources"));
const MentorReports = React.lazy(() => import("./mentor_reports"));

const MentorProfilePage = () => {
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
                            return <MentorDashboard />;
                        case "#profile":
                            return <MentorProfile />;
                        case "#mentorship-engagements":
                            return <MentorshipEngagements />;
                        case "#collaboration":
                            return <MentorCollaboration />;
                        case "#educational-resources":
                            return <EducationalResources />;
                        case "#reports":
                            return <MentorReports />;
                        default:
                            return <MentorDashboard />;
                    }
                })()}
            </React.Suspense>
        );
    };

    return (
        <div className="d-flex">
            <MentorSidebar />
            <div className="flex-grow-1 p-4">
                {renderPage(currentPage)}
            </div>
        </div>
    );
};

export default MentorProfilePage;
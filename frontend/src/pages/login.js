import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (userType) => {
        // Navigate to the corresponding page based on user type
        if (userType === "startup") {
            navigate("/startup-profile");
        } else if (userType === "investor") {
            navigate("/investor-profile");
        } else if (userType === "ipr-professional") {
            navigate("/ipr-professional-profile");
        } else if (userType === "researcher") {
            navigate("/researcher");
        } else if (userType === "admin") {
            navigate("/admin");
        } else if (userType === "mentor") {
            navigate("/mentor-profile");
        } else if (userType === "government-bodies") {
            navigate("/government-bodies");
        }
    };

    return (
        <div className="login-page d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Welcome to StartupHub</h2>
                <p className="text-center">Choose your role to proceed:</p>
                <div className="d-grid gap-3">
                    <button className="btn btn-primary" onClick={() => handleLogin("startup")}>
                        Login as Startup
                    </button>
                    <button className="btn btn-success" onClick={() => handleLogin("investor")}>
                        Login as Investor
                    </button>
                    <button className="btn btn-info" onClick={() => handleLogin("ipr-professional")}>
                        Login as IPR Professional
                    </button>
                    <button className="btn btn-info" onClick={() => handleLogin("researcher")}>
                        Login as Researcher
                    </button>
                    <button className="btn btn-info" onClick={() => handleLogin("admin")}>
                        Login as Admin
                    </button>
                    <button className="btn btn-warning" onClick={() => handleLogin("mentor")}>
                        Login as Mentor
                    </button>
                    <button className="btn btn-info" onClick={() => handleLogin("government-bodies")}>
                        Login as Government Bodies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

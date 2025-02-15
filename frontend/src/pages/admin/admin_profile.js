import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCog, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './admin_profile.css';

const AdminProfile = () => {
    return (
        <div className="admin-profile-container">
            <div className="profile-header">
                <FontAwesomeIcon icon={faUser} className="profile-icon" />
                <h2>Admin Profile</h2>
                <p>Manage your account and settings</p>
            </div>
            <div className="profile-content">
                <div className="profile-card">
                    <h3>Personal Information</h3>
                    <p><FontAwesomeIcon icon={faEnvelope} /> Email: admin@example.com</p>
                    <p><FontAwesomeIcon icon={faCog} /> Role: Administrator</p>
                </div>
                <div className="profile-card">
                    <h3>Analytics Overview</h3>
                    <p><FontAwesomeIcon icon={faChartLine} /> Monthly Active Users: 1,200</p>
                    <p><FontAwesomeIcon icon={faChartLine} /> New Signups: 300</p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
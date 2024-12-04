import React, { useState } from 'react';
import './admin_user_management.css';

// Mock data for users
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Startup', registrationStatus: 'Active', lastLogin: '2023-10-01', activityStatus: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Investor', registrationStatus: 'Pending', lastLogin: '2023-09-28', activityStatus: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Mentor', registrationStatus: 'Inactive', lastLogin: '2023-09-15', activityStatus: 'Inactive' },
    // Add more users as needed
];

const pendingRegistrations = [
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', documentsSubmitted: true },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', documentsSubmitted: false },
    // Add more pending users as needed
];

const UserManagementSystem = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [registrations, setRegistrations] = useState(pendingRegistrations);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterUsers(e.target.value);
    };

    const filterUsers = (search) => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.role.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleApprove = (id) => {
        console.log(`Email sent to user ${id} for approval.`);
        setRegistrations(registrations.filter(user => user.id !== id));
    };

    const handleReject = (id, reason) => {
        console.log(`Email sent to user ${id} for rejection. Reason: ${reason}`);
        setRegistrations(registrations.filter(user => user.id !== id));
    };

    const exportToCSV = () => {
        console.log('Exporting to CSV...');
    };

    return (
        <div className="user-management-system">
            <h2>User Management</h2>
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search by name, email, or role"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={exportToCSV}>Export CSV</button>
            </div>
            <div className="user-categories">
                {['Startup', 'Investor', 'Mentor'].map(role => (
                    <div key={role} className="user-category">
                        <h3>{role}s</h3>
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Registration Status</th>
                                    <th>Last Login</th>
                                    <th>Activity Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.filter(user => user.role === role).map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.registrationStatus}</td>
                                        <td>{user.lastLogin}</td>
                                        <td>{user.activityStatus}</td>
                                        <td>
                                            <button>View</button>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            <h2>Pending Registrations</h2>
            <ul className="pending-registrations">
                {registrations.map(user => (
                    <li key={user.id}>
                        <span>{user.name} ({user.email})</span>
                        <span>Documents: {user.documentsSubmitted ? 'Submitted' : 'Pending'}</span>
                        <button onClick={() => handleApprove(user.id)}>Approve</button>
                        <button onClick={() => {
                            const reason = prompt('Enter reason for rejection:');
                            handleReject(user.id, reason);
                        }}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagementSystem;

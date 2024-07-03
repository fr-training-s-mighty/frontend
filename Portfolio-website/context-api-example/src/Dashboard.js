import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Dashboard = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div className="container mt-4">
            <h1>Dashboard</h1>
            {user ? (
                <div>
                    <p>Welcome to your  dashboard, {user.name} !</p>
                    <button className="btn btn-outline-secondary" onClick={logout}>Logout</button>
                </div>
            ):(
                <p>You need to log in to view this page.</p>
            )}
        </div>
    );
};

export default Dashboard;
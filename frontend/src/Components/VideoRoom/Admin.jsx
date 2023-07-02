import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:4000/users").then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
    }, []);

    const [approvedRequests, setApprovedRequests] = useState([]);
    const [declinedRequests, setDeclinedRequests] = useState([]);

    const handleApprove = (id, username) => {
        console.log(id)
        // Move the users to the approved list
        axios.post(`http://127.0.0.1:4000/${id}`, {
            "registration": true
        }).then((response) => {
            console.log(response.data);
        }).catch(err => console.log(err))
        setUsers((prevUsers) => prevUsers.filter((u) => u._id !== id));
        setApprovedRequests((prevApproved) => [...prevApproved, id]);
        // Perform further actions for approval if needed
        alert(
            "Request of " + users.username + "(Request _id-" + users.id + ")" + " has been approved!"
        );
    };

    const handleDecline = (users) => {
        // Move the users to the declined list
        setUsers((prevUsers) => prevUsers.filter((u) => u._id !== users._id));
        setDeclinedRequests((prevDeclined) => [...prevDeclined, users]);
        // Perform further actions for decline if needed
        alert(
            "Request of " + users.username + "(Request _id-" + users._id + ")" + " has been declined!"
        );
    };

    const handleViewProfile = (users) => {
        console.log(users.username);
    };

    const renderRequests = () => {
        return users.map((users) => (
            <div key={users._id} className="request">
                <div className="request-username">{users.username}</div>
                <div className="action-buttons">
                    <button onClick={() => handleApprove(users._id, users.username)}>Approve</button>
                    <button onClick={() => handleDecline(users)}>Decline</button>
                    <button onClick={() => handleViewProfile(users)}>View Profile</button>
                </div>
            </div>
        ));
    };

    const renderApprovedRequests = () => {
        return approvedRequests.map((users) => (
            <div key={users._id} className="approved-request">
                {users.username}
            </div>
        ));
    };

    const renderDeclinedRequests = () => {
        return declinedRequests.map((users) => (
            <div key={users._id} className="declined-request">
                {users.username}
            </div>
        ));
    };

    return (
        <>
            <div className="admin-heading border">
                <div>
                    <h1>Admin Page</h1>
                </div>
            </div>
            <div className="display">
                <div className="pending-req">
                    <h3 className="req-approval">Pending Volunteer Request Approval:</h3>
                    <p>Please review and approve or decline the following requests:</p>
                    <div className="requestContainer">{renderRequests()}</div>
                </div>
            </div>
        </>
    );
};

export default Admin;
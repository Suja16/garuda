import React from 'react';
import './queries.css'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

const NotificationBox = () => {
  const notifications = [
    { message: 'Notification from Customs', sender: 'Customs', timestamp: '10:00 AM' },
    { message: 'Notification from DNK', sender: 'DNK', timestamp: '11:30 AM' },
  ];

  return (
    <DashboardLayout>
    <DashboardNavbar/>
    <div className="notification-container">
      <div className="notification-box">
        <h1>Queries</h1>
        <div className="notifications">
          {notifications.map((notification, index) => (
            <div key={index} className="notification">
              <strong>{notification.sender}:</strong> {notification.message} - {notification.timestamp}
            </div>
          ))}
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default NotificationBox;

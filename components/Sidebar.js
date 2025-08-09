import React from 'react';
import { Nav, NavItem } from 'lightswind'; // Assuming 'lightswind' has these components

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <Nav vertical>
        <NavItem href="/dashboard" active>
          Dashboard
        </NavItem>
        <NavItem href="/users">
          Users
        </NavItem>
        <NavItem href="/settings">
          Settings
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;

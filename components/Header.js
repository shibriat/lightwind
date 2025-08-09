import React from 'react';
import { Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'lightswind'; // Assuming 'lightswind' has these components
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div>
        <Input type="text" placeholder="Search..." />
      </div>
      <div>
        <Dropdown>
          <DropdownToggle>
            <span className="text-gray-600">John Doe</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/profile">Profile</DropdownItem>
            <DropdownItem href="/logout">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;


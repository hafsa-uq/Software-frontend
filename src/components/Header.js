import React, { useState, useEffect } from 'react';
import { FaBell, FaSearch, FaChevronDown } from 'react-icons/fa';
import axios from 'axios';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); 

        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:7000/accounts/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const toggleSearch = () => setSearchActive(!searchActive);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const getInitials = (username) => {
    const names = username.split(' '); 
    const firstInitial = names[0]?.charAt(0).toUpperCase(); 
    const secondInitial = names[1]?.charAt(0).toUpperCase(); 
    return (firstInitial || '') + (secondInitial || ''); 
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center font-roboto-condensed">
      <div>
        <h1 className="text-xl font-bold">Welcome back, {profile ? profile.full_name : 'UNIQ Heights'}</h1>
        <p className="text-sm">Powered by UNIQ Heights</p>
      </div>
      <div className="flex items-center space-x-4 relative">
        <div className="flex items-center">
          <FaSearch 
            onClick={toggleSearch} 
            className="cursor-pointer" 
          />
          {searchActive && (
            <input 
              type="search" 
              placeholder="Search..." 
              className="p-2 border rounded ml-2 transition-all duration-300 ease-in-out"
              style={{ width: '200px' }} 
            />
          )}
        </div>

        {/* Bell Icon */}
        <FaBell className="cursor-pointer"/>

        {/* User Avatar and Dropdown */}
        <div className="relative">
          <div className="flex items-center">
            <p 
              alt="User Avatar" 
              className="bg-gray-200 text-gray-800 font-bold rounded-full flex items-center justify-center" 
              style={{ width: '40px', height: '40px' }}
            >
              {profile ? getInitials(profile.full_name) : 'UH'}
            </p>
            <FaChevronDown className="ml-2 mr-7" onClick={toggleDropdown} />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="#profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</a>
              <a href="#contacts" className="block px-4 py-2 hover:bg-gray-100">My Contacts</a>
              <a href="#settings" className="block px-4 py-2 hover:bg-gray-100">Account Settings</a>
              <a href="#logout" className="block px-4 py-2 hover:bg-gray-100">Log Out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

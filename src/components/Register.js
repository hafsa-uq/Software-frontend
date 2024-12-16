import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    client_id: '',
    full_name: '',
    email_address: '',
    username: '',
    password: '',
    confirmPassword: '',
    roles: ['client'],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:7000/accounts/register', formData); 
      alert('Registration successful');
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="mx-auto mb-6 w-16 h-auto" 
        />
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {['client_id', 'full_name', 'email_address', 'username'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700">{field.replace('_', ' ').toUpperCase()}</label>
              <div className="flex items-center border-b border-gray-300 py-2">
                <input
                  type={field === 'email_address' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                  placeholder={`Enter your ${field.replace('_', ' ')}`}
                />
              </div>
            </div>
          ))}
          {['password', 'confirmPassword'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700">{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
              <div className="flex items-center border-b border-gray-300 py-2">
                <AiOutlineLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                  placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                />
              </div>
            </div>
          ))}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Sign Up</button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

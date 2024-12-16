import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '', 
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/accounts/login', formData); 
      localStorage.setItem('token', response.data.token); 
      alert('Login successful');
      navigate('/dashboard'); 
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Login failed');
      } else {
        setError('Login failed');
      }
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
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>} 
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email or Username</label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <AiOutlineUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email or Username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700">Forgot password?</Link>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Sign In</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

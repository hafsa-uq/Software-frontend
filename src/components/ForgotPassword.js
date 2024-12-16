// import React, { useState } from 'react';
// import axios from 'axios';
// import { AiOutlineMail } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:7000/accounts/forgot-password', { email });
//       setMessage(response.data.message);
//       setError('');
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message || 'An error occurred');
//       } else {
//         setError('An error occurred');
//       }
//       setMessage('');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"> {/* Added horizontal padding */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full sm:w-96"> {/* Adjusted width for larger screens */}
//         <img
//           src="/images/logo.png"
//           alt="Logo"
//           className="mx-auto mb-6 w-16 h-auto" // Logo size adjustment
//         />
//         <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
//         {message && <div className="text-green-500 text-center mb-4">{message}</div>} {/* Success message */}
//         {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Error message */}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email Address</label>
//             <div className="flex items-center border-b-2 border-gray-400 py-2">
//               <AiOutlineMail className="text-gray-500 mr-2" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//                 placeholder="Enter your email address"
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Send</button>
//         </form>
//         <p className="text-center mt-4">
//           Remembered your password? <Link to="/login" className="text-blue-500 hover:text-blue-700">Sign In</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


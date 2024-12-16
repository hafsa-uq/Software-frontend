// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { FaChartPie, FaChartLine, FaShoppingCart, FaBoxes, FaClipboardList, FaHeadset, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import { GoGoal } from 'react-icons/go'; // Import the GoGoal icon

// const AMSidebar = () => {
//   const location = useLocation();

//   // Define links and their respective icons
//   const links = [
//     { to: "/", icon: <FaChartPie />, text: "Dashboard" },
//     { to: "/analytics", icon: <FaChartLine />, text: "Analytics" },
//     { to: "/advertising", icon: <FaShoppingCart />, text: "Advertising" },
//     { to: "/inventory", icon: <FaBoxes />, text: "Inventory" },
//     { to: "/traffic", icon: <FaClipboardList />, text: "Traffic and Conversion" },
//     { to: "/goal", icon: <GoGoal />, text: "Goal" },
//     { to: "/support", icon: <FaHeadset />, text: "Customer Support" },
//     { to: "/settings", icon: <FaCog />, text: "Settings", isSettings: true }, // Add a flag for the Settings link
//     { to: "/logout", icon: <FaSignOutAlt />, text: "Logout" }
//   ];

//   return (
//     <aside className="bg-gray-50 text-gray-900 w-full md:w-64 min-h-screen p-4 pt-10 font-roboto"> {/* Change here */}
//       <div className="h-full flex flex-col">
//         <nav className="flex-1 overflow-y-auto">
//           <ul>
//             {links.map(({ to, icon, text, isSettings }) => (
//               <li key={to} className={`flex items-center ${isSettings ? 'mt-24' : 'mb-2'}`}> 
//                 <Link 
//                   to={to} 
//                   className={`flex items-center space-x-2 w-full p-2 rounded transition-colors duration-300 ${location.pathname === to ? 'bg-gray-200 text-gray-900' : 'hover:bg-gray-200'}`}
//                 >
//                   {icon}
//                   <span>{text}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default AMSidebar;

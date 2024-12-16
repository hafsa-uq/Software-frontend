import React from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiMessageCircle, FiPlusCircle, FiBarChart } from "react-icons/fi";
import { FcAdvertising } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";

const Goal = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Stats Section */}
      <div className="flex justify-around mb-8">
        <div className="bg-blue-600 text-white text-center px-6 py-4 rounded-lg shadow-md flex-1 mx-2">
          <h2 className="text-xl">Active Goals</h2>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-blue-600 text-white text-center px-6 py-4 rounded-lg shadow-md flex-1 mx-2">
          <h2 className="text-xl">Completed Goals</h2>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-blue-600 text-white text-center px-6 py-4 rounded-lg shadow-md flex-1 mx-2">
          <h2 className="text-xl">Success Rate</h2>
          <p className="text-4xl font-bold">98%</p>
        </div>
      </div>

      {/* Active Goals Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-700">Active Goals</h3>
          <div className="flex items-center space-x-4">
            <Link to="/new-goal" className="flex items-center text-blue-600 font-bold">
              <FiPlusCircle className="w-6 h-6 mr-2 text-blue-600" />
              New Goal
            </Link>
            <Link to="/download" className="flex items-center text-blue-600 font-bold">
              <FiDownload className="w-6 h-6 mr-2 text-blue-600" />
              Download
            </Link>
            <Link to="/last-month" className="text-blue-600 font-bold">
              Last Month
            </Link>
            <Link to="/this-month" className="text-blue-600 font-bold">
              This Month
            </Link>
            <Link to="/see-all" className="text-blue-600 font-bold">
              See All
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Name</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">AM</th>
                <th className="p-2">Status</th>
                <th className="p-2">Deadline</th>
                <th className="p-2">Chat</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 flex items-center">
                  <Link to="/goal/goaldetails" className="flex items-center text-gray-800 font-bold">
                    <FcAdvertising className="w-6 h-6 mr-2" />
                    <span>Ranking #2</span>
                  </Link>
                </td>
                <td className="p-2">Aug 11th, 2024</td>
                <td className="p-2 text-gray-500">Pending</td>
                <td className="p-2">
                  <div className="relative w-32 h-8 bg-gray-200 rounded-lg">
                    <div className="absolute top-0 left-0 h-8 bg-blue-600 rounded-lg" style={{ width: "0%" }}></div>
                    <span className="absolute top-0 left-2 text-black">0%</span>
                  </div>
                </td>
                <td className="p-2">50 days left</td>
                <td className="p-2 text-center">
                  <FiMessageCircle className="text-blue-600" size={20} />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 flex items-center">
                  <Link to="/market-share" className="flex items-center text-gray-800 font-bold">
                    <FiBarChart className="w-6 h-6 mr-2" />
                    <span>Market Share</span>
                  </Link>
                </td>
                <td className="p-2">Jun 9th, 2024</td>
                <td className="p-2">Alfredo Torres</td>
                <td className="p-2">
                  <div className="relative w-32 h-8 bg-gray-200 rounded-lg">
                    <div className="absolute top-0 left-0 h-8 bg-blue-600 rounded-lg" style={{ width: "44%" }}></div>
                    <span className="absolute top-0 left-2 text-black">44%</span>
                  </div>
                </td>
                <td className="p-2">39 days left</td>
                <td className="p-2 text-center">
                  <FiMessageCircle className="text-blue-600" size={20} />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 flex items-center">
                  <Link to="/increase-revenue" className="flex items-center text-gray-800 font-bold">
                    <MdAttachMoney className="w-6 h-6 mr-2" />
                    <span>Increase Revenue</span>
                  </Link>
                </td>
                <td className="p-2">Jun 7th, 2024</td>
                <td className="p-2">Alfredo Torres</td>
                <td className="p-2">
                  <div className="relative w-32 h-8 bg-gray-200 rounded-lg">
                    <div className="absolute top-0 left-0 h-8 bg-blue-600 rounded-lg" style={{ width: "87%" }}></div>
                    <span className="absolute top-0 left-2 text-black">87%</span>
                  </div>
                </td>
                <td className="p-2">18 days left</td>
                <td className="p-2 text-center">
                  <FiMessageCircle className="text-blue-600" size={20} />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 flex items-center">
                  <Link to="/goal/goaldetails" className="flex items-center text-gray-800 font-bold">
                    <GiShoppingCart className="w-6 h-6 mr-2" />
                    <span>Order Increase</span>
                  </Link>
                </td>
                <td className="p-2">Mar 1st, 2024</td>
                <td className="p-2">Alfredo Torres</td>
                <td className="p-2">
                  <div className="relative w-32 h-8 bg-green-500 rounded-lg">
                    <span className="absolute top-0 left-2 text-white">Success</span>
                  </div>
                </td>
                <td className="p-2">0 days left</td>
                <td className="p-2 text-center">
                  <FiMessageCircle className="text-blue-600" size={20} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Goal;

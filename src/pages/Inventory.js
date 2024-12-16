import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaTruck, FaWarehouse, FaChartBar, FaClipboardList } from 'react-icons/fa';

const Inventory = () => {
  const [metrics, setMetrics] = useState({
    totalSKUs: 0,
    totalUnits: 0,
    inventoryValue: 0,
    lowStockItems: 0,
    overstockItems: 0,
    turnoverRate: 0,
  });

  const [alerts, setAlerts] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [restockRecommendations, setRestockRecommendations] = useState([]);
  const [fbaData, setFbaData] = useState({
    storageFee: 0,
    longTermStorageFee: 0,
    inventoryAging: [],
    transferRecommendations: [],
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [editingSKU, setEditingSKU] = useState(null);
  const [editableItem, setEditableItem] = useState({});

  useEffect(() => {
    const fetchMetrics = () => {
      setMetrics({
        totalSKUs: 1200,
        totalUnits: 75000,
        inventoryValue: 500000,
        lowStockItems: 150,
        overstockItems: 50,
        turnoverRate: 8.5,
      });
    };

    const fetchAlerts = () => {
      setAlerts([
        { message: "Low Stock on SKU A", type: "critical", sku: "SKU_A" },
        { message: "Overstock on SKU B", type: "warning", sku: "SKU_B" },
      ]);
    };

    const fetchInventoryItems = () => {
      setInventoryItems([
        { sku: "SKU12345", currentStock: 500, salesVelocity: "20/day", daysOfInventory: 25, reorderPoint: 200, eoq: 300 },
        { sku: "SKU67890", currentStock: 150, salesVelocity: "15/day", daysOfInventory: 10, reorderPoint: 100, eoq: 200 },
      ]);
    };

    const fetchRestockRecommendations = () => {
      setRestockRecommendations([
        { sku: "SKU12345", recommendedAmount: 100, leadTime: "5 days" },
        { sku: "SKU67890", recommendedAmount: 50, leadTime: "3 days" },
      ]);
    };

    const fetchFbaData = () => {
      setFbaData({
        storageFee: 2000,
        longTermStorageFee: 300,
        inventoryAging: [
          { sku: "SKU12345", age: "60 days", recommendation: "Consider removal" },
          { sku: "SKU67890", age: "30 days", recommendation: "Stable" },
        ],
        transferRecommendations: [
          { sku: "SKU12345", recommendedTransfer: 100 },
          { sku: "SKU67890", recommendedTransfer: 50 },
        ],
      });
    };

    fetchMetrics();
    fetchAlerts();
    fetchInventoryItems();
    fetchRestockRecommendations();
    fetchFbaData();
  }, []);

  const handleRestock = (sku) => {
    alert(`Restocking ${sku}`);
  };

  const handleEdit = (item) => {
    setEditingSKU(item.sku);
    setEditableItem(item);
  };

  const handleSave = () => {
    const updatedItems = inventoryItems.map((item) =>
      item.sku === editableItem.sku ? editableItem : item
    );
    setInventoryItems(updatedItems);
    setEditingSKU(null);
  };

  const filteredItems = inventoryItems.filter(item =>
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-page p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black flex items-center">
        <FaWarehouse className="mr-2" /> Inventory Management
      </h1>

      {/* Key Metrics Section */}
      <div className="inventory-dashboard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(metrics).map(([key, value], index) => (
          <div key={key} className="bg-white p-4 rounded shadow flex items-center">
            <FaChartBar className="text-[#2684ff] mr-2" />
            <div>
              <h2 className="text-lg font-semibold text-[#2684ff]">{key.replace(/([A-Z])/g, ' $1')}</h2>
              <p className={`text-2xl ${index < 6 ? 'text-gray-400' : 'text-black'}`}>{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Inventory Performance and Alerts */}
      <div className="inventory-performance bg-white p-4 rounded shadow mb-6 w-full">
        <div className="mb-4 border p-2 rounded shadow-sm bg-gray-100 flex flex-col items-start w-64">
          <h3 className="text-lg font-semibold text-black">Inventory Turnover Rate</h3>
          <p className="text-2xl text-gray-400 font-light">{metrics.turnoverRate}%</p>
        </div>
        <div className="alerts-section">
          <h3 className="text-xl font-bold mb-4 text-black flex items-center">
            <FaExclamationCircle className="mr-2 text-red-600" /> Critical Alerts
          </h3>
          <ul>
            {alerts.map((alert, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span className={`text-red-600 font-bold text-lg animate-pulse motion`}>{alert.message}</span>
                <button 
                  className={`bg-[#2684ff] text-white text-lg p-2 rounded hover:bg-[#1f6cd4]`}
                  onClick={() => alert.type === "critical" ? handleRestock(alert.sku) : null}
                >
                  {alert.type === "critical" ? "Reorder Now!" : "Consider Promotion"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-inventory bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4 text-black flex items-center">
          <FaClipboardList className="mr-2" /> Product-level Inventory Management
        </h2>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search SKU..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 mb-4 w-full"
        />

        <table className="w-full table-auto">
          <thead>
            <tr className="text-black">
              <th className="p-2">SKU</th>
              <th className="p-2">Current Stock</th>
              <th className="p-2">Sales Velocity</th>
              <th className="p-2">Days of Inventory</th>
              <th className="p-2">Reorder Point</th>
              <th className="p-2">EOQ</th>
              <th className="p-2 ml-24">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.sku}>
                <td className="text-black p-2">{item.sku}</td>
                <td className="text-black p-2">
                  {editingSKU === item.sku ? (
                    <input
                      type="number"
                      value={editableItem.currentStock}
                      onChange={(e) => setEditableItem({ ...editableItem, currentStock: e.target.value })}
                      className="border rounded p-1 w-full"
                    />
                  ) : (
                    item.currentStock
                  )}
                </td>
                <td className="text-black p-2">{item.salesVelocity}</td>
                <td className="text-black p-2">{item.daysOfInventory}</td>
                <td className="text-black p-2">{item.reorderPoint}</td>
                <td className="text-black p-2">{item.eoq}</td>
                <td className="flex space-x-2 p-2 ml-16">
                  {editingSKU === item.sku ? (
                    <button 
                      className="bg-green-500 text-white text-xs p-1 rounded hover:bg-green-600"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  ) : (
                    <button 
                      className="bg-[#2684ff] text-white text-xs p-1 rounded hover:bg-[#1f6cd4]"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  )}
                  <button 
                    className="bg-[#ff4757] text-white text-xs p-1 rounded hover:bg-[#ff6b81]"
                    onClick={() => handleRestock(item.sku)}
                  >
                    Restock
                  </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Restock Alerts and Recommendations */}
      <div className="restock-alerts bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4 text-black flex items-center">
          <FaCheckCircle className="mr-2" /> Restock Alerts and Recommendations
        </h2>
        <ul>
          {restockRecommendations.map((rec, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span className="text-black">{rec.sku}: Recommended to order {rec.recommendedAmount} units (Lead time: {rec.leadTime})</span>
              <button 
                className="bg-[#2684ff] text-white text-xs p-1 rounded hover:bg-[#1f6cd4]"
                onClick={() => handleRestock(rec.sku)}
              >
                <FaTruck className="inline-block mr-1" /> Reorder
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* FBA Inventory Management */}
      <div className="fba-inventory bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4 text-black flex items-center">
          <FaClipboardList className="mr-2" /> FBA Inventory Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-black">FBA Storage Fee Calculator</h3>
            <p className="text-black">Estimated fees: ${fbaData.storageFee}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Long-term Storage Fee Projections</h3>
            <p className="text-black">Next billing: ${fbaData.longTermStorageFee} in fees</p>
          </div>
        </div>
      </div>

      {/* Supplier and Purchase Order Management */}
      <div className="supplier-management bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-black flex items-center">
          <FaTruck className="mr-2" /> Supplier and Purchase Order Management
        </h2>
        <ul>
          <li className="flex justify-between">
            <span>Next PO for SKU12345:</span>
            <span className="text-green-500">Delivery on 09/30/2024</span>
          </li>
          <li className="flex justify-between">
            <span>Next PO for SKU67890:</span>
            <span className="text-red-500">On hold</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inventory;

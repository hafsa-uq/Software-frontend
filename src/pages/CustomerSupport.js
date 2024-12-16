import React, { useState } from 'react';
import { FaEnvelope, FaTasks, FaPlus, FaExclamationTriangle, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';

const messages = [
  { id: 1, sender: 'Client A', subject: 'Issue with Order', tags: ['ActionRequired'], date: '2024-10-01', status: 'Unread' },
  { id: 2, sender: 'Client B', subject: 'Follow-up on Refund', tags: ['FYI'], date: '2024-09-30', status: 'Read' },
  { id: 3, sender: 'Internal', subject: 'Reminder: Action Required', tags: ['Urgent'], date: '2024-09-29', status: 'Unread' },
];

const cases = [
  { id: 1, title: 'Order Issue', status: 'In Progress', dueDate: '2024-10-05' },
  { id: 2, title: 'Refund Request', status: 'Resolved', dueDate: '2024-09-28' },
];

const CustomerSupport = () => {
  const [selectedTab, setSelectedTab] = useState('Messages');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMessages = messages.filter(message =>
    message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 pl-24">Customer Support Hub</h1>

      {/* Tab Navigation */}
      <div className="flex  space-x-4 mb-6 pl-24 pt-3">
        <TabButton
          isActive={selectedTab === 'Messages'}
          onClick={() => setSelectedTab('Messages')}
          icon={<FaEnvelope color="black" />}
          label="Unified Message Center"
        />
        <TabButton
          isActive={selectedTab === 'ActionItems'}
          onClick={() => setSelectedTab('ActionItems')}
          icon={<FaTasks color="black" />}
          label="Action Items"
        />
        <TabButton
          isActive={selectedTab === 'CreateCase'}
          onClick={() => setSelectedTab('CreateCase')}
          icon={<FaPlus color="black" />}
          label="Create New Case"
        />
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {selectedTab === 'Messages' && (
          <MessagesTab
            filteredMessages={filteredMessages}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
        {selectedTab === 'ActionItems' && <ActionItemsTab cases={cases} />}
        {selectedTab === 'CreateCase' && <CreateCaseTab />}
      </div>
    </div>
  );
};

const TabButton = ({ isActive, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center p-2 rounded transition duration-300 
      ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-300'}`}
  >
    <span className="mr-2">{icon}</span>
    {label}
  </button>
);

const MessagesTab = ({ filteredMessages, searchTerm, setSearchTerm }) => (
  <div>
    <div className="flex justify-between mb-4">
      <h2 className="text-xl font-semibold text-left">Messages</h2>
      <input
        type="text"
        placeholder="Search messages..."
        className="border border-gray-300 p-2 rounded w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="space-y-4">
      {filteredMessages.length > 0 ? (
        filteredMessages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))
      ) : (
        <p className="text-gray-500">No messages found.</p>
      )}
    </div>
  </div>
);

const MessageCard = ({ message }) => {
  const getTagIcon = (tag) => {
    switch (tag) {
      case 'ActionRequired':
        return <FaExclamationTriangle color="black" />;
      case 'FYI':
        return <FaInfoCircle color="black" />;
      case 'Urgent':
        return <FaExclamationCircle color="black" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg transition duration-200">
      <h3 className="text-lg font-bold">{message.subject}</h3>
      <p className="text-sm text-gray-600">From: {message.sender} | {message.date}</p>
      <div className="flex space-x-2 mt-2">
        {message.tags.map((tag) => (
          <span key={tag} className={`flex items-center px-2 py-1 rounded text-white ${tag === 'Urgent' ? 'bg-red-500' : 'bg-yellow-500'}`}>
            {getTagIcon(tag)}
            <span className="ml-1">{tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const ActionItemsTab = ({ cases }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-left">Action Items</h2>
    <div className="space-y-4">
      {cases.map((item) => (
        <ActionItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const ActionItemCard = ({ item }) => (
  <div className="p-4 bg-white rounded shadow-md flex justify-between hover:shadow-lg transition duration-200">
    <div>
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="text-sm text-gray-600">Due Date: {item.dueDate}</p>
      <span className={`px-2 py-1 rounded ${item.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>
        {item.status}
      </span>
    </div>
    <button className="text-blue-500 hover:underline">Mark as Complete</button>
  </div>
);

const CreateCaseTab = () => {
  const [caseData, setCaseData] = useState({
    title: '',
    category: '',
    description: '',
    attachments: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Case submitted:', caseData);
    setCaseData({ title: '', category: '', description: '', attachments: null });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-left">Create New Case</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <div>
          <label className="block font-semibold mb-2">Case Title</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Enter case title"
            value={caseData.title}
            onChange={(e) => setCaseData({ ...caseData, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <select
            className="border border-gray-300 p-2 w-full rounded"
            value={caseData.category}
            onChange={(e) => setCaseData({ ...caseData, category: e.target.value })}
            required
          >
            <option value="">Select a category</option>
            <option value="Order Issue">Order Issue</option>
            <option value="Refund Request">Refund Request</option>
            <option value="Technical Support">Technical Support</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded"
            rows="4"
            placeholder="Describe the issue"
            value={caseData.description}
            onChange={(e) => setCaseData({ ...caseData, description: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Attachments</label>
          <input
            type="file"
            className="border border-gray-300 p-2 w-full rounded"
            onChange={(e) => setCaseData({ ...caseData, attachments: e.target.files[0] })}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
          Submit Case
        </button>
      </form>
    </div>
  );
};

export default CustomerSupport;

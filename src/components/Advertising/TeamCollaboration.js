import React, { useState } from "react";

const TeamCollaboration = () => {
  const [notes, setNotes] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Team Collaboration Tools</h2>

      {/* Notes Section */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">Shared Notes</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write notes here..."
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        />
      </div>

      {/* Tasks Section */}
      <div>
        <h3 className="text-xl mb-2">Task List</h3>
        <div className="flex mb-2">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task"
            className="p-2 border border-gray-300 rounded flex-grow"
          />
          <button
            onClick={handleAddTask}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Task
          </button>
        </div>
        <ul className="list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index} className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`} onClick={() => toggleTaskCompletion(index)}>
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCollaboration;

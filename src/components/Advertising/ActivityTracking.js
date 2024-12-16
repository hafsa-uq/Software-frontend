import React, { useState } from "react";

const ActivityTracking = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 
  const [taskDeadline, setTaskDeadline] = useState(new Date()); 
  const [activityLog, setActivityLog] = useState([]); 

  const addTask = () => {
    if (newTask) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        deadline: taskDeadline.toLocaleString(),
      };
      setTasks([...tasks, newTaskObj]);
      setActivityLog([...activityLog, `Added task: ${newTask}`]);
      setNewTask('');
      setTaskDeadline(new Date()); 
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Activity Tracking and To-Do List</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded"
          placeholder="Add a new task"
        />
        <input
          type="date"
          value={taskDeadline.toISOString().substring(0, 10)}
          onChange={(e) => setTaskDeadline(new Date(e.target.value))}
          className="border p-2 rounded ml-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded ml-2">Add</button>
      </div>

      <h3 className="text-xl font-semibold mb-2">Your Tasks:</h3>
      <table className="min-w-full bg-white border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">Task</th>
            <th className="border-b p-2 text-left">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border-b p-2">{task.text}</td>
              <td className="border-b p-2">{task.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mb-2">Activity Log:</h3>
      <table className="min-w-full bg-white border border-gray-300">
        <tbody>
          {activityLog.map((log, index) => (
            <tr key={index}>
              <td className="border-b p-2">{log}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTracking;

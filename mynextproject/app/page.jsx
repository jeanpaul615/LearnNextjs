"use client"; // Marca este archivo como un Client Component

import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Cargar tareas desde Local Storage al montar el componente
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Guardar tareas en Local Storage cuando cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-sans p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Lista de Tareas</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border border-gray-300 rounded-l p-2 w-80"
          placeholder="Agregar nueva tarea"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white rounded-r px-4 hover:bg-blue-700 transition duration-300"
        >
          Agregar
        </button>
      </div>
      <ul className="w-full max-w-md">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 mb-2 rounded border ${
              task.completed ? 'bg-green-100 border-green-500' : 'bg-white border-gray-300'
            }`}
          >
            <span
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white rounded px-2 hover:bg-red-700 transition duration-300"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

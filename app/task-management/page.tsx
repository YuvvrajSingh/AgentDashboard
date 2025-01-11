"use client";

import React, { useState } from "react";
import { Filter, Plus, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import TaskDetail from "../components/TaskDetail";
import { Task, TaskStatus, TaskPriority } from "../types/task";

export default function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      name: "Follow up with Client A",
      clientName: "Acme Corp",
      dueDate: "2024-03-20",
      priority: "high",
      status: "pending",
      description: "Schedule follow-up meeting to discuss project timeline",
      assignedTo: "John Doe",
      notes: "Client prefers morning meetings",
      attachments: [],
    },
    // Add more sample tasks as needed
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
  });

  const filteredTasks = tasks.filter((task) => {
    if (filters.status !== "all" && task.status !== filters.status)
      return false;
    if (filters.priority !== "all" && task.priority !== filters.priority)
      return false;
    return true;
  });

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="text-green-500" />;
      case "in_progress":
        return <Clock className="text-blue-500" />;
      case "pending":
        return <AlertCircle className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Task Management
            </h1>
            <button
              onClick={() =>
                setSelectedTask({
                  id: "",
                  name: "",
                  clientName: "",
                  dueDate: "",
                  priority: "medium",
                  status: "pending",
                  description: "",
                  assignedTo: "",
                  notes: "",
                  attachments: [],
                })
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
            >
              <Plus size={20} />
              New Task
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex items-center gap-4">
            <Filter size={20} className="text-gray-500" />
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, status: e.target.value }))
              }
              className="border rounded-md px-3 py-2"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <select
              value={filters.priority}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, priority: e.target.value }))
              }
              className="border rounded-md px-3 py-2"
            >
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {task.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {task.clientName}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                        task.priority
                      )}`}
                    >
                      {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {getStatusIcon(task.status)}
                      <span className="ml-2 text-sm text-gray-500">
                        {task.status
                          .split("_")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedTask(task)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <TaskDetail
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={(updatedTask) => {
            if (updatedTask.id) {
              setTasks((prev) =>
                prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
              );
            } else {
              setTasks((prev) => [
                ...prev,
                { ...updatedTask, id: Date.now().toString() },
              ]);
            }
            setSelectedTask(null);
          }}
        />
      )}
    </div>
  );
}

export type TaskPriority = "high" | "medium" | "low";
export type TaskStatus = "pending" | "in_progress" | "completed";

export interface Task {
  id: string;
  name: string;
  clientName: string;
  dueDate: string;
  priority: TaskPriority;
  status: TaskStatus;
  description: string;
  assignedTo: string;
  notes: string;
  attachments: string[];
}

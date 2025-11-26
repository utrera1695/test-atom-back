import { Task } from "../entities/task.entity";

export interface TaskRepository {
	create(userId: string, task: Task): Promise<Task>;
	edit(taskId: string, task: Task): Promise<Task>;
	delete(taskId: string): Promise<void>;
	list(userId: string): Promise<Task[]>;
	findById(taskId: string): Promise<Task | null>;
}

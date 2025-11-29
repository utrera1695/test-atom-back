import { WriteResult } from "firebase-admin/firestore";
import { Task } from "../entities/task.entity";

export interface TaskRepository {
	create(userId: string, task: Task): Promise<Task>;
	edit(userId: string, taskId: string, task: Task): Promise<Task>;
	delete(userId: string, taskId: string): Promise<WriteResult>;
	list(userId: string, query: any): Promise<Task[]>;
	findById(taskId: string): Promise<Task | null>;
}

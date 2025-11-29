import { FirestoreTaskRepository } from "../../infrastructure/firebaseTask.repository";
import { TaskRepository } from "../../domain/repositories/task.repository";
import { WriteResult } from "firebase-admin/firestore";
import { TaskDTO } from "../dto/task.dto";
import { Task } from "../../domain/entities/task.entity";

export class UpdateTaskUseCase {
	private taskRepository: TaskRepository;

	constructor() {
		this.taskRepository = new FirestoreTaskRepository();
	}

	async execute(userId: string, taskId: string, data: TaskDTO): Promise<Task> {
		return await this.taskRepository.edit(userId, taskId, data);
	}
}

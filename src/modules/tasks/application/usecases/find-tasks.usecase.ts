import { FirestoreTaskRepository } from "../../infrastructure/firebaseTask.repository";
import { TaskRepository } from "../../domain/repositories/task.repository";
import { Task } from "../../domain/entities/task.entity";

export class FindTasksUseCase {
	private taskRepository: TaskRepository;

	constructor() {
		this.taskRepository = new FirestoreTaskRepository();
	}

	async execute(userId: string, query: any): Promise<Task[]> {
		return await this.taskRepository.list(userId, query);
	}
}

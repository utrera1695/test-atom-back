import { TaskDTO } from "../dto/task.dto";
import { FirestoreTaskRepository } from "../../infrastructure/firebaseTask.repository";
import { TaskRepository } from "../../domain/repositories/task.repository";
import { Task } from "../../domain/entities/task.entity";
import { TaskFactory } from "../../domain/factories/task.factory";

export class CreateTaskUseCase {
	private taskRepository: TaskRepository;

	constructor() {
		this.taskRepository = new FirestoreTaskRepository();
	}

	async execute(userId: string, taskData: TaskDTO): Promise<Task> {
		const task = TaskFactory.create(taskData);
		return await this.taskRepository.create(userId, task);
	}
}

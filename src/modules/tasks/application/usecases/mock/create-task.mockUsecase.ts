import { Task } from "../../../domain/entities/task.entity";
import { TaskFactory } from "../../../domain/factories/task.factory";
import { TaskRepository } from "../../../domain/repositories/task.repository";
import { TaskDTO } from "../../dto/task.dto";

export class CreateTaskMockUseCase {
	constructor(private taskRepository: TaskRepository) {}

	async execute(userId: string, taskData: TaskDTO): Promise<Task> {
		const task = TaskFactory.create(taskData);
		return await this.taskRepository.create(userId, task);
	}
}

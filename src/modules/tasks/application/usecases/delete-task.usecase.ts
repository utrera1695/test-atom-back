import { FirestoreTaskRepository } from "../../infrastructure/firebaseTask.repository";
import { TaskRepository } from "../../domain/repositories/task.repository";
import { WriteResult } from "firebase-admin/firestore";

export class DeleteTaskUseCase {
	private taskRepository: TaskRepository;

	constructor() {
		this.taskRepository = new FirestoreTaskRepository();
	}

	async execute(userId: string, taskId: string): Promise<WriteResult> {
		return await this.taskRepository.delete(userId, taskId);
	}
}

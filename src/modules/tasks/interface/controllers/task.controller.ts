import { Request, Response } from "express";
import { TaskDTO } from "../../application/dto/task.dto";
import { CreateTaskUseCase } from "../../application/usecases/create-task.usecase";

export class TaskController {
	private createTaskUseCase: CreateTaskUseCase;

	constructor() {
		this.createTaskUseCase = new CreateTaskUseCase();
	}
	public async create(req: Request, res: Response): Promise<void> {
		const taskData: TaskDTO = req.body;
		try {
			const task = await this.createTaskUseCase.execute(req.user.uid, taskData);
			res.status(201).json(task);
		} catch (error: Error | any) {
			res.status(400).json({ error: error.message });
		}
	}
}

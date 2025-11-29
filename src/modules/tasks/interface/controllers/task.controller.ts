import { Request, Response } from "express";
import { TaskDTO } from "../../application/dto/task.dto";
import { CreateTaskUseCase } from "../../application/usecases/create-task.usecase";
import { FindTasksUseCase } from "../../application/usecases/find-tasks.usecase";
import { DeleteTaskUseCase } from "../../application/usecases/delete-task.usecase";
import { UpdateTaskUseCase } from "../../application/usecases/update-task.usecase";

export class TaskController {
	private createTaskUseCase: CreateTaskUseCase;
	private findTasksUseCase: FindTasksUseCase;
	private updateTaskUseCase: UpdateTaskUseCase;
	private deleteTaskUseCase: DeleteTaskUseCase;

	constructor() {
		this.createTaskUseCase = new CreateTaskUseCase();
		this.findTasksUseCase = new FindTasksUseCase();
		this.updateTaskUseCase = new UpdateTaskUseCase();
		this.deleteTaskUseCase = new DeleteTaskUseCase();
	}

	public async create(req: Request, res: Response): Promise<void> {
		const taskData: TaskDTO = req.body;
		try {
			const task = await this.createTaskUseCase.execute(req.user, taskData);
			res.status(201).json(task);
		} catch (error: Error | any) {
			console.error(error);
			res.status(error?.status || 500).json({ error: error.message });
		}
	}
	public async find(req: Request, res: Response): Promise<void> {
		try {
			const task = await this.findTasksUseCase.execute(req.user, req.query);
			res.status(201).json(task);
		} catch (error: Error | any) {
			console.error(error);
			res.status(error?.status || 500).json({ error: error.message });
		}
	}
	public async update(req: Request, res: Response): Promise<void> {
		try {
			const taskId = req.params.id;
			const data = req.body;
			const task = await this.updateTaskUseCase.execute(req.user, taskId, data);
			res.status(201).json(task);
		} catch (error: Error | any) {
			console.error(error);
			res.status(error?.status || 500).json({ error: error.message });
		}
	}
	public async delete(req: Request, res: Response): Promise<void> {
		try {
			const taskId = req.params.id;
			const task = await this.deleteTaskUseCase.execute(req.user, taskId);
			res.status(201).json(task);
		} catch (error: Error | any) {
			console.error(error);
			res.status(error?.status || 500).json({ error: error.message });
		}
	}
}

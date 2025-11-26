import { CreateTaskMockUseCase } from "../modules/tasks/application/usecases/mock/create-task.mockUsecase";
import { Task } from "../modules/tasks/domain/entities/task.entity";
import { TaskRepository } from "../modules/tasks/domain/repositories/task.repository";

describe("Task Use Cases", () => {
	let taskRepository: jest.Mocked<TaskRepository>;
	let createTask: CreateTaskMockUseCase;
	/* 	let updateTask: UpdateTask;
	let deleteTask: DeleteTask;
	let listTasks: ListTasks; */

	beforeEach(() => {
		taskRepository = {
			create: jest.fn(),
			update: jest.fn(),
			delete: jest.fn(),
			list: jest.fn(),
		} as unknown as jest.Mocked<TaskRepository>;

		createTask = new CreateTaskMockUseCase(taskRepository);
		/* updateTask = new UpdateTask(taskRepository);
		deleteTask = new DeleteTask(taskRepository);
		listTasks = new ListTasks(taskRepository); */
	});

	it("should create a task", async () => {
		const userId = "1";
		const dto = {
			title: "Test Task",
			description: "Test Description",
		};
		const taskData = { title: "Test Task", description: "Test Description" };
		const task = new Task(
			"1",
			taskData.title,
			taskData.description,
			false,
			new Date()
		);

		taskRepository.create = jest.fn().mockResolvedValue(task);

		const result = await createTask.execute("1", task);
		expect(result).toEqual(task);
		expect(taskRepository.create).toHaveBeenCalledTimes(1);
		expect(taskRepository.create).toHaveBeenCalledWith(userId, task);
	});

	/* it("should update a task", async () => {
		const taskData = {
			id: "1",
			title: "Updated Task",
			description: "Updated Description",
		};
		const task = new Task(
			taskData.id,
			taskData.title,
			taskData.description,
			false
		);

		taskRepository.update = jest.fn().mockResolvedValue(task);

		const result = await updateTask.execute(taskData);
		expect(result).toEqual(task);
		expect(taskRepository.update).toHaveBeenCalledWith(taskData);
	});

	it("should delete a task", async () => {
		const taskId = "1";

		taskRepository.delete = jest.fn().mockResolvedValue(true);

		const result = await deleteTask.execute(taskId);
		expect(result).toBe(true);
		expect(taskRepository.delete).toHaveBeenCalledWith(taskId);
	});

	it("should list tasks", async () => {
		const tasks = [new Task("1", "Task 1", "Description 1", false)];

		taskRepository.list = jest.fn().mockResolvedValue(tasks);

		const result = await listTasks.execute();
		expect(result).toEqual(tasks);
		expect(taskRepository.list).toHaveBeenCalled();
	}); */
});

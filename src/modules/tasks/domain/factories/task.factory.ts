import { TaskDTO } from "../../application/dto/task.dto";
import { Task } from "../entities/task.entity";

export class TaskFactory {
	static uuid = () => crypto.randomUUID();
	static create({ id, title, description, createdAt }: TaskDTO) {
		id = id || this.uuid();
		createdAt = createdAt || new Date();
		return new Task(id, title, description, false, createdAt);
	}
}

export class TaskDTO {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	createdAt: Date;

	constructor(
		id: string,
		title: string,
		description: string,
		completed: boolean,
		createdAt: Date
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.completed = completed;
		this.createdAt = createdAt;
	}
}

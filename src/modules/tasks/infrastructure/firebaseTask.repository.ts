import { Firestore, WriteResult } from "firebase-admin/firestore";
import { Task } from "../domain/entities/task.entity";
import { TaskRepository } from "../domain/repositories/task.repository";

import FirebaseProvider from "../../../shared/infrastructure/firebase/firebase.provider";

export class FirestoreTaskRepository implements TaskRepository {
	private firestore: Firestore;
	private collectionName: string = "tasks";

	constructor() {
		this.firestore = FirebaseProvider.firestore();
	}

	async create(userId: string, data: Task): Promise<Task> {
		await this.firestore
			.collection("users")
			.doc(userId)
			.collection(this.collectionName)
			.doc(data.id)
			.set({ ...data });
		return data;
	}

	async findById(taskId: string): Promise<Task | null> {
		const doc = await this.firestore
			.collection(this.collectionName)
			.doc(taskId)
			.get();

		if (!doc.exists) return null;

		const data = doc.data()!;
		return new Task(
			data.id,
			data.title,
			data.description,
			data.completed,
			data.createdAt
		);
	}

	async edit(
		userId: string,
		taskId: string,
		data: Partial<Task>
	): Promise<Task> {
		await this.firestore
			.collection("users")
			.doc(userId)
			.collection(this.collectionName)
			.doc(taskId)
			.update(data);

		const updated = await this.findById(taskId);
		return updated!;
	}

	async delete(userId: string, taskId: string): Promise<WriteResult> {
		console.log(taskId);
		const response = await this.firestore
			.collection("users")
			.doc(userId)
			.collection(this.collectionName)
			.doc(taskId)
			.delete();
		console.log(response);
		return response;
	}

	async list(userId: string, query: any): Promise<Task[]> {
		const snapshot = await this.firestore
			.collection("users")
			.doc(userId)
			.collection(this.collectionName)
			.orderBy("createdAt", "desc")
			.get();
		return snapshot.docs.map((doc) => doc.data() as Task);
	}
}

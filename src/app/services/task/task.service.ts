import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl: string = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getTask(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  createTask(newTask: any): Observable<any> {
    return this.http.post(this.baseUrl, newTask);
  }

  toggleTaskReminder(task: any): Observable<any> {
    task.reminder = !task.reminder;
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put(url, task);
  }

  deleteTask(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}

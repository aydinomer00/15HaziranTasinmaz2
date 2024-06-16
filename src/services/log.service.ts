import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogEntry } from '../app/models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private apiUrl = 'https://localhost:7051/api/Logs';

  constructor(private http: HttpClient) { }

  getLogs(): Observable<LogEntry[]> {
    return this.http.get<LogEntry[]>(this.apiUrl);
  }

  addLog(log: LogEntry): Observable<LogEntry> {
    return this.http.post<LogEntry>(this.apiUrl, log);
  }

  updateLog(log: LogEntry): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${log.logId}`, log);
  }

  deleteLog(logId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${logId}`);
  }
}


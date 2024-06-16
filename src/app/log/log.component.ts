import { Component, OnInit } from '@angular/core';
import { LogEntry } from '../models/log.model';
import { LogService } from '../../services/log.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logs: LogEntry[] = [];

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.getLogs().subscribe((data: LogEntry[]) => {
      this.logs = data;
    });
  }
}

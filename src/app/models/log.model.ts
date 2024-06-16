export interface LogEntry {
    logId: number;
    userId: number;
    status: string;
    actionType: string;
    description: string;
    timestamp: Date;
    ipAddress: string;
  }
  
export interface User {
  id: number;
  email: string;
  passwordHash: string;
  role: string;
  createdAt: Date;
}

export interface JwtPayload {
  studentNumber?: string;
  name?: string;
  role: 'student' | 'admin';
}

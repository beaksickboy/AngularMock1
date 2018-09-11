import { Role } from './role.model';

export class User {
    userId: number;
    userName: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    role: Role;
}

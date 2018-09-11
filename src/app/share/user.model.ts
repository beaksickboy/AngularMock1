import { Role } from './role.model';

export class User {
    userId: number;
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    fullName: string;
    role: Role;
}

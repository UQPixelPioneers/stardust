// Login function to find a user by username and password
import {users} from "@/interfaces/mockdata";
import {User} from "@/interfaces/database";

export function login(username: string, password: string): User | null {
    const user = users.find(user => user.username === username && user.password === password);
    return user != null ? user : null;
}
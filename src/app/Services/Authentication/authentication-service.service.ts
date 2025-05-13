import { Injectable } from '@angular/core';
import { userData } from '../../model/user-data';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private usersKey = 'users';
  private currentUserKey = 'currentUser';

  constructor() {}

  signup(userData: userData): string {
    const users = this.getAllUsers();
  
    const userExists = users.some(
      user => user.email.trim().toLowerCase() === userData.email.trim().toLowerCase()
    );
  
    if (userExists) return 'User already exists';
  
    const { confirmPassword, ...cleanUser } = userData; // remove confirmPassword
    users.push(cleanUser);
    localStorage.setItem('users', JSON.stringify(users));
    return 'Signup successful';
  }
  

  // Log in user by matching credentials
  login(email: string, password: string): string {
    const users = this.getAllUsers();

    console.log('🔍 All users:', users);
    console.log('🔑 Attempted login with:', email, password);

    const matchedUser = users.find(
      user =>
        user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        user.password === password
    );

    if (matchedUser) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(matchedUser));
      return 'Login successful';
    }

    return 'Invalid email or password';
  }

  // Get the currently logged-in user
  getCurrentUser(): userData | null {
    const user = localStorage.getItem(this.currentUserKey);
    return user ? JSON.parse(user) : null;
  }

  // Clear the session
  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  // Retrieve all registered users
  private getAllUsers(): userData[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }
}

export interface userData {
  firstName: string;
  lastName: string;
  username: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  bloodGroup?: string;
  cityState?: string;
  emergencyContact?: string;
  address?: string;
  age?: number;
  password?: string;   // Include if using same model for signup
  role?: string;       // 👈 Add this line
}

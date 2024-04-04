export interface JobSeekerFormData {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    description: string;
    phoneNumber: string;
    yearsOfExperience?: number;
    skills: string[]; 
    resume?: string;
    profilePic?: string;
  }
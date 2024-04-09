export interface Organization {
  id: number;
  username: string;
  email: string;
  name: string;
  location: string;
  website?: string;
  overview: string;
  foundedAt: number;
  profilePic: string;
}

export interface JobSeeker {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  description: string;
  yearsOfExperience: number;
  phoneNumber: number;
  skills: string[];
  profilePic: string;
  resume: string | null;
  jobApplications:Application[]
}


export interface JobProfile {
  id: number;
  role: string;
  requiredExperience: number;
  employeeType: string;
  salary: number;
  location:string;
  jobDescription: string;
  skillsRequired: string[];
  createdAt: Date;
  updatedAt: Date;
  organizationId:number;
  applications?:Application[]
  organization:{
    username: string;
    email: string;
    name: string;
    location: string;
    website?: string;
    overview: string;
    foundedAt: number;
    profilePic: string;
  }
};


export interface ZodErrorResponse {
  error: {
    issues: {
      code: string;
      expected: string;
      received: string;
      path: string[];
      message: string;
    }[];
    name: string;
  };
}

export enum Status {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

// Define the Application model type
export interface Application {
  id: number;
  jobProfile: JobProfile;
  jobProfileId: number;
  jobSeeker: JobSeeker;
  jobSeekerId: number;
  status: Status;
  applicationDate: Date;
  updatedAt: Date;
}


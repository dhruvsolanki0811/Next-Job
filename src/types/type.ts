export interface Organization {
  id: number;
  username: string;
  email: string;
  name: string;
  location: string;
  website: string;
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
}

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

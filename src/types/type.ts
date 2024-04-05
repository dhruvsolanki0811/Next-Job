export interface Organization {
    id: number,
    username: string,
    email: string,
    name: string,
    location: string,
    website: string,
    overview: string,
    foundedAt: number,
    profilePic: string
  }

  export interface JobSeeker {
    id: number ;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    description: string;
    yearsOfExperience: number;
    phonenumber: number;
    skills: string[];
    profilePic: string;
    resume:string|null
  }


import { JobSeeker, Organization } from "@prisma/client";
// Exclude keys from user
export default function excludePassword(
    entites: Organization|JobSeeker
  ) {
    return Object.fromEntries(
      Object.entries(entites).filter(([key]) => key!='password')
    )
  }
  

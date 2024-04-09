import { JobSeeker, Organization } from "@prisma/client";
// Exclude keys from user
export default function excludePassword(
    entites: Organization|JobSeeker
  ) {
    return Object.fromEntries(
      Object.entries(entites).filter(([key]) => key!='password')
    )
  }

export  function formatTimestampToDDMonthYYYY(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate: string = date.toLocaleDateString('en-US', options);
    return formattedDate;
}

  

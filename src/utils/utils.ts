import { Organization } from "@prisma/client";
import { Key } from "react";

// Exclude keys from user
export default function excludePassword(
    entites: Organization
  ) {
    return Object.fromEntries(
      Object.entries(entites).filter(([key]) => key!='password')
    )
  }
  

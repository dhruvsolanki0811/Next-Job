'use client'
import { CompanyDetails, JobseekerDetails, Navbar } from '@/components/components';
import { useParams } from 'next/navigation';
import React from 'react'

function page() {
    const { username } = useParams();
    const userNameAsString = Array.isArray(username) ? username[0] : username
  
    return (
      <>
        <Navbar>@{userNameAsString}</Navbar>
        <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        <CompanyDetails username={userNameAsString}></CompanyDetails>
        </div>
      </>
    );
}

export default page
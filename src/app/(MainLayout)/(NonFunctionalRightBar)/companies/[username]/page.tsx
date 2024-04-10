import { CompanyDetails, JobseekerDetails, Navbar } from '@/components/components';
import { useParams } from 'next/navigation';
import React from 'react'

function page({ params }: { params: { username: string }}) {
  
    return (
      <>
        <Navbar>@{params.username}</Navbar>
        <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        <CompanyDetails username={params.username}></CompanyDetails>
        </div>
      </>
    );
}

export default page
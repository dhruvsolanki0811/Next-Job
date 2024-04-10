import { JobPostingForm, Navbar } from '@/components/components'
import React from 'react'

function page() {
  return (
    <>
        <Navbar>Post a Job</Navbar>
        <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex  justify-center">
          <JobPostingForm></JobPostingForm>
        </div>
    </>
  )
}

export default page
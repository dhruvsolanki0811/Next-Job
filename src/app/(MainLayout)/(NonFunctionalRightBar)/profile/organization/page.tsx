'use client'
import CompanyProfile from '@/components/CompanyProfile/CompanyProfile'
import { WithAuthOrg } from '@/components/HOC/withAuthOrg'
import {  Navbar } from '@/components/components'
import { useSession } from 'next-auth/react'
import React from 'react'

function page() {
   const {data:auth}= useSession()
    
   return (
    <>
    <Navbar>@{auth?.user.username}</Navbar>
        <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        {/* <CompanyDetails username={auth?.user.username}></CompanyDetails> */}
            <CompanyProfile></CompanyProfile>
        </div>
      </>
  )
}

export default WithAuthOrg(page)
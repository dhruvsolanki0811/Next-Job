'use client'
import { WithAuthOrg } from '@/components/HOC/withAuthOrg'
import { Navbar, PostedJobsList } from '@/components/components'
import React from 'react'

function page({ params }: { params: { orgId: number }}) {
  console.log(params)
  return (
    <>
        <Navbar>Jobs Posted By Organization</Navbar>
        <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full ">
          <PostedJobsList ></PostedJobsList>
        </div>
    </>
  )
}

export default WithAuthOrg(page)
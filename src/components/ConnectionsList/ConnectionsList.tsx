'use client'
import { useFetchConnections } from '@/hooks/useConnectionData'
import React from 'react'
import { JobseekerBox } from '../components'
import { JobSeeker } from '@/types/type'

function ConnectionsList({status}:{status:string}) {
    const {data:connections}=useFetchConnections({status})
  return (
    <>
            <div className="max-xl:block max-sm:h-[80vh] max-h-[90vh] flex gap-[18px] flex-wrap justify-center  w-full overflow-x-hidden overflow-y-auto px-3 py-5 max-xl:py-[0px]">
            {connections && connections.map((seeker:JobSeeker)=>
            <JobseekerBox key={seeker.id} connectionStatus={status}  jobseeker={seeker}></JobseekerBox>)}

        </div>
    </>
  )
}

export default ConnectionsList
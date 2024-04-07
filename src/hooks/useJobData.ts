import { JobProfile } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchAllJobs = () => {
    const fetchAllJobs = async (): Promise<JobProfile[]> => {
      const response = await axios.get(
        `/api/jobs`
      );
      return response.data.jobProfile;
    };
  
    return useQuery({queryKey:["all-jobs"],queryFn: fetchAllJobs});
  };



export const useFetchSingleJob = (id:string) => {
    const fetchSingleJob = async (): Promise<JobProfile> => {
      const response = await axios.get(
        `/api/jobs/${id}`
      );
      return response.data.job;
    };
  
    return useQuery({queryKey:[`job-${id}`],queryFn: fetchSingleJob});
  };
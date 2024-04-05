import { JobSeeker } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchAllJobseekers = () => {
  const fetchAllJobseekers = async (): Promise<JobSeeker[]> => {
    const response = await axios.get(
      `/api/user/jobseeker`
    );
    return response.data.jobSeekers as JobSeeker[];
  };

  return useQuery({queryKey:["all-jobseekers"],queryFn: fetchAllJobseekers});
};

import { Application, JobProfile } from "@/types/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { appendToBaseUrl } from "./hooks";

export const useFetchAllJobs = () => {
  const fetchAllJobs = async (): Promise<JobProfile[]> => {
    const response = await axios.get(`/api/jobs`);
    return response.data.jobProfile;
  };

  return useQuery({ queryKey: ["all-jobs"], queryFn: fetchAllJobs });
};

export const useFetchSingleJob = (id: string) => {
  const fetchSingleJob = async (): Promise<JobProfile> => {
    const response = await axios.get(`/api/jobs/${id}`);
    return response.data.job;
  };

  return useQuery({ queryKey: [`job-${id}`], queryFn: fetchSingleJob });
};

export const useFetchStatusOfApplication = (id: number) => {
  const { data: authData } = useSession();
  const fetchStatusOfApplication = async () => {

    const response = await axios.get(`/api/jobs/getstatus/${id}`);
    return response.data.application;
  };
  return useQuery({
    queryKey: ["job-status", authData?.user.id, id],
    queryFn: fetchStatusOfApplication,
  });
};

export const useApplyJob = (jobId: number) => {
  const { data: authData } = useSession();
  const applyJob = async () => {
    try {
      await axios.post(appendToBaseUrl(`jobs/apply/${jobId}`));
    } catch (error) {
      if (isAxiosError(error) && error.response?.status != 500) {
        toast.error(error.response?.data.error);
        throw Error(error.response?.data.error);
      } else {
        toast.error("Internal Server Eror");
        throw Error("Internal Server Eror");
      }
    }
  };
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: applyJob,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      // await queryClient.refetchQueries({queryKey:["job-status",authData?.user.id, jobId]})
      // await queryClient.invalidateQueries({queryKey:["job-status",authData?.user.id, jobId]})
      await queryClient.invalidateQueries({
        queryKey: ["job-status", authData?.user.id, jobId],
      });
      // await queryClient.refetchQueries({queryKey:["job-status",authData?.user.id, jobId]})
      toast.success(`Successfull Applied`);
    },
  });
};

export const useFetchJobsWithApplicationStatus = (status: string) => {
  const { data: authData } = useSession();
  async function fetchJobsWithApplicationStatus() {
    const response = await axios.get(
      appendToBaseUrl(`jobs/jobseeker/${status}`)
    );
    return response.data.jobs as JobProfile[];
  }
  return useQuery({
    queryKey: ["jobs-application-status", authData?.user.id, status],
    queryFn: fetchJobsWithApplicationStatus,
  });
};

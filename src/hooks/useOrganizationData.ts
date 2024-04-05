
import { Organization } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchAllOrganizations = () => {
  const fetchAllOrganizations = async (): Promise<Organization[]> => {
    const response = await axios.get(
      `/api/user/organization`
    );
    return response.data.organizations;
  };

  return useQuery({queryKey:["all-organizations"],queryFn: fetchAllOrganizations});
};

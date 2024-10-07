import { useQuery } from "@tanstack/react-query";
import { fetchDoctorCities, fetchSpecialties } from "./axios";

export const useDoctorCities = () => {
  return useQuery({
    queryKey: ["doctorCities"],
    queryFn: fetchDoctorCities,
    retry: 2, 
  });
};

export const useSpecialties = () => {
  return useQuery({
    queryKey: ["specialties"],
    queryFn: fetchSpecialties,
    retry: 2, 
  });
};

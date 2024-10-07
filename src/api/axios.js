import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchDoctorCities = async () => {
  const response = await apiClient.get("/doctorCities");
  return response.data;
};

export const fetchSpecialties = async () => {
  const response = await apiClient.get("/specialties");
  return response.data;
};
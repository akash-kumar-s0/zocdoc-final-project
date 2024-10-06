import axios from "axios";

export const getDoctorCities = async() => await axios.get("http://localhost:5000/doctorCities");
export const getSpecialities = async() => await axios.get('http://localhost:5000/specialties');

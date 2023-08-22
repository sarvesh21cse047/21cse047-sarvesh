
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train'; 
const AUTH_TOKEN = 'your-auth-token'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const fetchAllTrains = () => api.get('/all-trains');
export const fetchTrainById = (trainId) => api.get(`/train/${trainId}`);

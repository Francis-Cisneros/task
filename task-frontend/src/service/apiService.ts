import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const ApiService = {
  getTasks: async (): Promise<AxiosResponse<Task[]>> => {
    return axios.get(`${API_BASE_URL}/tasks`);
  },
  getTaskById: async (taskId: number): Promise<AxiosResponse<Task>> => {
    return axios.get(`${API_BASE_URL}/tasks/${taskId}`);
  },
  createTask: async (taskData: TaskData): Promise<AxiosResponse<Task>> => {
    return axios.post(`${API_BASE_URL}/tasks`, taskData);
  },
  updateTask: async (taskId: number, taskData: TaskData): Promise<AxiosResponse<Task>> => {
    return axios.put(`${API_BASE_URL}/tasks/${taskId}`, taskData);
  },
  deleteTask: async (taskId: number): Promise<AxiosResponse<void>> => {
    return axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
  },
  login: async (credentials: Credentials): Promise<AxiosResponse<LoginResponse>> => {
    return axios.post(`${API_BASE_URL}/login`, credentials);
  },
 
};

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export interface TaskData {
  title: string;
  description: string;
  status: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}


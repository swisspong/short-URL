import axios from "axios";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const API = axios.create({
  // baseURL: 'http://localhost/api',
  baseURL: '/api',
  // baseURL: process.env.NODE_ENV === "production" ? "https://sim24th.com/api/v1" : "http://localhost/api/",
  //baseURL: "http://api:8000/v1",
  // baseURL: "http://localhost:8000/v1",
  // withCredentials: true
});
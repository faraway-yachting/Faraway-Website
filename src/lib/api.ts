import axios from 'axios';

/**
 * API utility functions for the Faraway Yacht Charter website
 */

const BACKEND_URL = process.env.BACKEND_URL!;

/**
 * Create axios instance with base configuration
 */
const apiClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  YACHTS: '/yacht/all-yachts',
  YACHT_BY_SLUG: '/yacht/by-slug',
  BLOGS: '/blog/all-blogs',
} as const;

/**
 * Fetch all yachts with pagination
 */
export const fetchYachts = async (page: number = 1, limit: number = 9) => {
  try {
    const response = await apiClient.get(`${API_ENDPOINTS.YACHTS}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching yachts:', error);
    throw error;
  }
};

/**
 * Fetch single yacht by slug
 */
export const fetchYachtBySlug = async (slug: string) => {
  try {
    const response = await apiClient.get(`${API_ENDPOINTS.YACHT_BY_SLUG}?slug=${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching yacht by slug:', error);
    throw error;
  }
};

/**
 * Fetch all blogs
 */
export const fetchBlogs = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.BLOGS);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

/**
 * Get backend URL
 */
export const getBackendUrl = (): string => {
  return BACKEND_URL;
};

export default apiClient;

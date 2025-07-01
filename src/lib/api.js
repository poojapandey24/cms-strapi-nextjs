import axios from "axios";

// Create axios instance with default configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // You can add authentication tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// Blog API functions
export const blogAPI = {
  // Get all blogs
  getAllBlogs: async () => {
    try {
      const response = await api.get("/blogs?populate=image");
      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },

  // Get blog by slug
  getBlogBySlug: async (slug) => {
    try {
      const response = await api.get(`/blogs?filters[slug][$eq]=${slug}&populate=image`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      throw error;
    }
  },

  // Get blog by document ID
  getBlogByDocumentId: async (documentId) => {
    try {
      const response = await api.get(`/blogs/${documentId}?populate=image`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog by document ID:", error);
      throw error;
    }
  },
};

export default api;

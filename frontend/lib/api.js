import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth APIs
export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password })
  return response.data
}

export const register = async (name, email, password) => {
  const response = await api.post('/auth/register', { name, email, password })
  return response.data
}

// Recipe APIs
export const getRecipes = async (filters = {}) => {
  const response = await api.get('/recipes', { params: filters })
  return response.data
}

export const getRecipeById = async (id) => {
  const response = await api.get(`/recipes/${id}`)
  return response.data
}

export const createRecipe = async (recipeData) => {
  const response = await api.post('/recipes', recipeData)
  return response.data
}

export const deleteRecipe = async (id) => {
  const response = await api.delete(`/recipes/${id}`)
  return response.data
}

export default api

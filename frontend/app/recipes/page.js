'use client'

import { useState, useEffect } from 'react'
import RecipeCard from '@/components/RecipeCard'
import RecipeFilters from '@/components/RecipeFilters'
import SearchBar from '@/components/SearchBar'
import { getRecipes } from '@/lib/api'

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: 'All',
    maxTime: ''
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchRecipes()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [filters, searchQuery, recipes])

  const fetchRecipes = async () => {
    try {
      setLoading(true)
      const data = await getRecipes()
      setRecipes(data)
      setFilteredRecipes(data)
    } catch (error) {
      console.error('Error fetching recipes:', error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...recipes]

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
      )
    }

    // Apply category filter
    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === filters.category)
    }

    // Apply time filter
    if (filters.maxTime) {
      filtered = filtered.filter(recipe => recipe.cookingTime <= parseInt(filters.maxTime))
    }

    setFilteredRecipes(filtered)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Browse Our Recipes</h1>
          <p className="section-subtitle">
            Discover delicious recipes from our community
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar onSearch={handleSearch} placeholder="Search recipes by title or ingredients..." />
        </div>

        {/* Filters */}
        <RecipeFilters filters={filters} onFilterChange={handleFilterChange} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary-600">{filteredRecipes.length}</span> recipes
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

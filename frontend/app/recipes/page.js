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

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
      )
    }

    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === filters.category)
    }

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
      <div className="min-h-screen bg-apple-bg-secondary dark:bg-apple-darkBg-primary flex items-center justify-center pt-14">
        <div className="loading-spinner w-10 h-10" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-apple-bg-secondary dark:bg-apple-darkBg-primary pt-14">
      <div className="container-apple-wide py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="section-title">Browse recipes</h1>
          <p className="section-subtitle mx-auto">
            Discover delicious recipes from our community
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <SearchBar onSearch={handleSearch} placeholder="Search recipes..." />
        </div>

        {/* Filters */}
        <RecipeFilters filters={filters} onFilterChange={handleFilterChange} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-body-small text-apple-text-secondary dark:text-apple-darkText-secondary">
            Showing <span className="font-medium text-apple-text-primary dark:text-apple-darkText-primary">{filteredRecipes.length}</span> recipes
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredRecipes.map((recipe, index) => (
              <div 
                key={recipe.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-title-4 font-semibold text-apple-text-primary dark:text-apple-darkText-primary mb-2">
              No recipes found
            </h3>
            <p className="text-body text-apple-text-secondary dark:text-apple-darkText-secondary">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

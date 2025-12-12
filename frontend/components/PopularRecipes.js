'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import RecipeCard from './RecipeCard'
import { getRecipes } from '@/lib/api'

export default function PopularRecipes() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecipes()
  }, [])

  const fetchRecipes = async () => {
    try {
      const data = await getRecipes()
      // Get top 6 recipes
      setRecipes(data.slice(0, 6))
    } catch (error) {
      console.error('Error fetching recipes:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Popular Recipes</h2>
          <p className="section-subtitle">
            Try these community favorites and chef recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/recipes" className="btn-primary">
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  )
}

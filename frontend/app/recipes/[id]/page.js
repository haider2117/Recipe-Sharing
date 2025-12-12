'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaClock, FaUtensils, FaStar, FaArrowLeft, FaTrash } from 'react-icons/fa'
import { getRecipeById, deleteRecipe } from '@/lib/api'
import { useAuth } from '@/context/AuthContext'

export default function RecipeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecipe()
  }, [params.id])

  const fetchRecipe = async () => {
    try {
      setLoading(true)
      const data = await getRecipeById(params.id)
      setRecipe(data)
    } catch (error) {
      console.error('Error fetching recipe:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) {
      return
    }

    try {
      await deleteRecipe(params.id)
      router.push('/recipes')
    } catch (error) {
      console.error('Error deleting recipe:', error)
      alert('Failed to delete recipe')
    }
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

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <button onClick={() => router.push('/recipes')} className="btn-primary">
          Browse Recipes
        </button>
      </div>
    )
  }

  const canDelete = user && recipe.userId && user.id === recipe.userId

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 font-semibold"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Recipe Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-[400px] w-full">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {recipe.category}
                  </span>
                  <span className="px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
                    {recipe.difficulty}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{recipe.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{recipe.description}</p>
                <p className="text-sm text-gray-500">By {recipe.author}</p>
              </div>
              
              {canDelete && (
                <button
                  onClick={handleDelete}
                  className="ml-4 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete Recipe"
                >
                  <FaTrash size={20} />
                </button>
              )}
            </div>

            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <FaClock className="text-primary-500" size={20} />
                <span className="font-semibold">{recipe.cookingTime} mins</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUtensils className="text-primary-500" size={20} />
                <span className="font-semibold">{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" size={20} />
                <span className="font-semibold">{recipe.rating || 0} / 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaUtensils className="text-primary-500" />
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-gray-700 pt-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { getRecipeById, deleteRecipe } from '@/lib/api'
import { useAuth } from '@/context/AuthContext'

// Minimal icons
const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const ChefIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </svg>
)

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

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
      <div className="min-h-screen bg-apple-bg-secondary dark:bg-apple-darkBg-primary flex items-center justify-center pt-14">
        <div className="loading-spinner w-10 h-10" />
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-apple-bg-secondary dark:bg-apple-darkBg-primary flex items-center justify-center pt-14">
        <div className="text-center">
          <h2 className="text-title-3 font-semibold text-apple-text-primary dark:text-apple-darkText-primary mb-4">
            Recipe not found
          </h2>
          <button onClick={() => router.push('/recipes')} className="btn-primary">
            Browse Recipes
          </button>
        </div>
      </div>
    )
  }

  const canDelete = user && recipe.userId && user.id === recipe.userId

  return (
    <div className="min-h-screen bg-apple-bg-secondary dark:bg-apple-darkBg-primary pt-14">
      <div className="container-apple py-8 md:py-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-apple-blue hover:text-apple-blue-hover 
                     text-body-small font-medium mb-8 transition-colors"
        >
          <ArrowLeftIcon /> Back
        </button>

        {/* Recipe Hero */}
        <article className="animate-fade-up">
          {/* Image */}
          <div className="relative aspect-[21/9] rounded-apple-2xl overflow-hidden shadow-apple-lg mb-8">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Header Card */}
          <div className="card p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="badge badge-accent">{recipe.category}</span>
                  <span className="badge">{recipe.difficulty}</span>
                </div>
                
                {/* Title */}
                <h1 className="text-title-2 md:text-title-1 font-semibold text-apple-text-primary dark:text-apple-darkText-primary tracking-tight mb-3">
                  {recipe.title}
                </h1>
                
                {/* Description */}
                <p className="text-body-large text-apple-text-secondary dark:text-apple-darkText-secondary mb-4">
                  {recipe.description}
                </p>
                
                {/* Author */}
                <p className="text-body-small text-apple-text-tertiary dark:text-apple-darkText-tertiary">
                  by <span className="text-apple-text-secondary dark:text-apple-darkText-secondary font-medium">{recipe.author}</span>
                </p>
              </div>
              
              {canDelete && (
                <button
                  onClick={handleDelete}
                  className="self-start p-3 text-apple-text-tertiary hover:text-apple-red 
                             hover:bg-apple-red/5 rounded-apple transition-colors"
                  title="Delete Recipe"
                >
                  <TrashIcon />
                </button>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-apple-gray-100 dark:border-apple-gray-800">
              <div className="flex items-center gap-2 text-apple-text-secondary dark:text-apple-darkText-secondary">
                <ClockIcon />
                <span className="text-body font-medium">{recipe.cookingTime} min</span>
              </div>
              <div className="flex items-center gap-2 text-apple-text-secondary dark:text-apple-darkText-secondary">
                <ChefIcon />
                <span className="text-body font-medium">{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-apple-orange"><StarIcon /></span>
                <span className="text-body font-medium text-apple-text-secondary dark:text-apple-darkText-secondary">
                  {recipe.rating || '—'} / 5
                </span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {/* Ingredients - Sidebar */}
            <div className="md:col-span-2">
              <div className="card p-6 md:p-8 sticky top-20">
                <h2 className="text-title-4 font-semibold text-apple-text-primary dark:text-apple-darkText-primary mb-6 flex items-center gap-2">
                  <ChefIcon />
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border border-apple-gray-300 dark:border-apple-gray-600 
                                       flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-apple-blue" />
                      </span>
                      <span className="text-body text-apple-text-primary dark:text-apple-darkText-primary">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions - Main */}
            <div className="md:col-span-3">
              <div className="card p-6 md:p-8">
                <h2 className="text-title-4 font-semibold text-apple-text-primary dark:text-apple-darkText-primary mb-6">
                  Instructions
                </h2>
                <div className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-apple-blue text-white 
                                        text-body-small font-semibold flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-body text-apple-text-primary dark:text-apple-darkText-primary pt-1 leading-relaxed">
                        {instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

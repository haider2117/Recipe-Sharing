'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createRecipe } from '@/lib/api'
import { useAuth } from '@/context/AuthContext'

// Minimal icons
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  </svg>
)

export default function SubmitRecipePage() {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Breakfast',
    cookingTime: '',
    difficulty: 'Easy',
    image: ''
  })
  const [ingredients, setIngredients] = useState([''])
  const [instructions, setInstructions] = useState([''])
  const [error, setError] = useState('')

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirect=/submit')
    }
  }, [user, authLoading, router])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const addIngredient = () => {
    setIngredients([...ingredients, ''])
  }

  const removeIngredient = (index) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((_, i) => i !== index))
    }
  }

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions]
    newInstructions[index] = value
    setInstructions(newInstructions)
  }

  const addInstruction = () => {
    setInstructions([...instructions, ''])
  }

  const removeInstruction = (index) => {
    if (instructions.length > 1) {
      setInstructions(instructions.filter((_, i) => i !== index))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const validIngredients = ingredients.filter(ing => ing.trim() !== '')
    const validInstructions = instructions.filter(inst => inst.trim() !== '')

    if (validIngredients.length === 0) {
      setError('Please add at least one ingredient')
      return
    }

    if (validInstructions.length === 0) {
      setError('Please add at least one instruction')
      return
    }

    try {
      setLoading(true)
      const recipeData = {
        ...formData,
        ingredients: validIngredients,
        instructions: validInstructions,
        cookingTime: parseInt(formData.cookingTime)
      }

      const newRecipe = await createRecipe(recipeData)
      router.push(`/recipes/${newRecipe.id}`)
    } catch (error) {
      console.error('Error creating recipe:', error)
      setError(error.response?.data?.error || 'Failed to create recipe')
    } finally {
      setLoading(false)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-apple-bg-secondary dark:bg-apple-darkBg-primary flex items-center justify-center pt-14">
        <div className="loading-spinner w-10 h-10" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-apple-bg-secondary dark:bg-apple-darkBg-primary pt-14">
      <div className="container-apple py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="section-title">Submit your recipe</h1>
          <p className="section-subtitle mx-auto">
            Share your culinary creation with the community
          </p>
        </div>

        {/* Form Card */}
        <div className="card p-6 md:p-10 max-w-3xl mx-auto animate-fade-up">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-apple-lg bg-apple-red/10 border border-apple-red/20">
              <p className="text-body-small text-apple-red">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div>
              <label className="block text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary mb-2">
                Recipe Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="input-field"
                placeholder="e.g., Classic Chocolate Chip Cookies"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="input-field resize-none"
                rows="3"
                placeholder="Brief description of your recipe"
                required
              />
            </div>

            {/* Category, Time, Difficulty */}
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="block text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="select-field"
                  required
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Snacks">Snacks</option>
                </select>
              </div>

              <div>
                <label className="block text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary mb-2">
                  Cooking Time (min)
                </label>
                <input
                  type="number"
                  name="cookingTime"
                  value={formData.cookingTime}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="30"
                  min="1"
                  required
                />
              </div>

              <div>
                <label className="block text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary mb-2">
                  Difficulty
                </label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  className="select-field"
                  required
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary mb-2">
                Image URL <span className="text-apple-text-tertiary font-normal">(optional)</span>
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="input-field"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Ingredients */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary">
                  Ingredients
                </label>
                <button
                  type="button"
                  onClick={addIngredient}
                  className="flex items-center gap-1.5 text-apple-blue hover:text-apple-blue-hover 
                             text-body-small font-medium transition-colors"
                >
                  <PlusIcon /> Add
                </button>
              </div>
              <div className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                      className="input-field flex-1"
                      placeholder={`Ingredient ${index + 1}`}
                    />
                    {ingredients.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeIngredient(index)}
                        className="p-3 text-apple-text-tertiary hover:text-apple-red 
                                   hover:bg-apple-red/5 rounded-apple transition-colors"
                      >
                        <TrashIcon />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-body-small font-medium text-apple-text-primary dark:text-apple-darkText-primary">
                  Instructions
                </label>
                <button
                  type="button"
                  onClick={addInstruction}
                  className="flex items-center gap-1.5 text-apple-blue hover:text-apple-blue-hover 
                             text-body-small font-medium transition-colors"
                >
                  <PlusIcon /> Add Step
                </button>
              </div>
              <div className="space-y-3">
                {instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-apple-blue text-white 
                                    text-body-small font-semibold flex items-center justify-center mt-2">
                      {index + 1}
                    </div>
                    <textarea
                      value={instruction}
                      onChange={(e) => handleInstructionChange(index, e.target.value)}
                      className="input-field flex-1 resize-none"
                      rows="2"
                      placeholder={`Step ${index + 1}`}
                    />
                    {instructions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeInstruction(index)}
                        className="p-3 text-apple-text-tertiary hover:text-apple-red 
                                   hover:bg-apple-red/5 rounded-apple transition-colors mt-2"
                      >
                        <TrashIcon />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-apple-gray-100 dark:border-apple-gray-800">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="loading-spinner w-4 h-4 border-white/30 border-t-white" />
                    Submitting...
                  </span>
                ) : (
                  'Submit Recipe'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

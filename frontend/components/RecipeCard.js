import Link from 'next/link'
import Image from 'next/image'
import { FaClock, FaUtensils, FaStar } from 'react-icons/fa'

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="card group cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-600">
            {recipe.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {recipe.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
            {recipe.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <FaClock className="text-primary-500" />
              <span>{recipe.cookingTime} mins</span>
            </div>
            <div className="flex items-center gap-1">
              <FaUtensils className="text-primary-500" />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>{recipe.rating || 0}</span>
            </div>
          </div>

          {/* Author */}
          <div className="mt-3 text-sm text-gray-500">
            By <span className="font-semibold text-gray-700">{recipe.author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

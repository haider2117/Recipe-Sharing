import { FaClock, FaTag } from 'react-icons/fa'

export default function RecipeFilters({ filters, onFilterChange }) {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Vegan', 'Snacks']
  const timeFilters = [
    { label: 'Any time', value: '' },
    { label: 'Under 15 mins', value: '15' },
    { label: 'Under 30 mins', value: '30' },
    { label: 'Under 60 mins', value: '60' },
  ]

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Category Filter */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary-100 p-2 rounded-lg">
              <FaTag className="text-primary-600 text-lg" />
            </div>
            <label className="text-lg font-bold text-gray-800">
              Category
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange({ category })}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  filters.category === category
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-primary-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary-100 p-2 rounded-lg">
              <FaClock className="text-primary-600 text-lg" />
            </div>
            <label className="text-lg font-bold text-gray-800">
              Cooking Time
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            {timeFilters.map((timeFilter) => (
              <button
                key={timeFilter.label}
                onClick={() => onFilterChange({ maxTime: timeFilter.value })}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  filters.maxTime === timeFilter.value
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-primary-300'
                }`}
              >
                {timeFilter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RecipeFilters({ filters, onFilterChange }) {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Vegan', 'Snacks']
  const timeFilters = [
    { label: 'Any time', value: '' },
    { label: 'Under 15 mins', value: '15' },
    { label: 'Under 30 mins', value: '30' },
    { label: 'Under 60 mins', value: '60' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange({ category })}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filters.category === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Cooking Time
          </label>
          <div className="flex flex-wrap gap-2">
            {timeFilters.map((timeFilter) => (
              <button
                key={timeFilter.label}
                onClick={() => onFilterChange({ maxTime: timeFilter.value })}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filters.maxTime === timeFilter.value
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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

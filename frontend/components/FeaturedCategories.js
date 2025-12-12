import Link from 'next/link'
import { FaCoffee, FaLeaf, FaCookie, FaPizzaSlice, FaFish, FaIceCream } from 'react-icons/fa'

export default function FeaturedCategories() {
  const categories = [
    { name: 'Breakfast', icon: FaCoffee, color: 'from-orange-400 to-orange-600', href: '/recipes?category=Breakfast' },
    { name: 'Vegan', icon: FaLeaf, color: 'from-green-400 to-green-600', href: '/recipes?category=Vegan' },
    { name: 'Desserts', icon: FaCookie, color: 'from-pink-400 to-pink-600', href: '/recipes?category=Desserts' },
    { name: 'Dinner', icon: FaPizzaSlice, color: 'from-red-400 to-red-600', href: '/recipes?category=Dinner' },
    { name: 'Lunch', icon: FaFish, color: 'from-blue-400 to-blue-600', href: '/recipes?category=Lunch' },
    { name: 'Snacks', icon: FaIceCream, color: 'from-purple-400 to-purple-600', href: '/recipes?category=Snacks' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">
            Find recipes that match your taste and dietary preferences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group"
              >
                <div className="card hover:scale-105 transition-transform duration-300 p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900">{category.name}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
